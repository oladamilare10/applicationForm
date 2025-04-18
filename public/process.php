<?php

class FormProcessor {
	private $to_email = "support@kartcentral.cloud"; // Replace with your email address
	private $upload_dir = "uploads/"; // Directory to store uploaded files temporarily

	public function process(): void
	{
		// Get form data from the request
		$req_body = file_get_contents('php://input');
		$data = json_decode($req_body, true);

		// Extract form data
		$fullName = $data['fullName'] ?? '';
		$dob = $data['dob'] ?? '';
		$email = $data['email'] ?? '';
		$number = $data['number'] ?? '';
		$eq = $data['eq'] ?? '';
		$pd = $data['pd'] ?? '';
		$address = $data['address'] ?? '';
		$city = $data['city'] ?? '';
		$state = $data['state'] ?? '';
		$zip = $data['zip'] ?? '';
		$gender = $data['gender'] ?? '';
		$q1 = $data['q1'] ?? '';
		$q2 = $data['q2'] ?? '';
		$q3 = $data['q3'] ?? '';

		// Create email message body
		$message = "
			<h2>New Job Application Submission</h2>
			<hr>
			<h3>Personal Information:</h3>
			Full Name: {$fullName}<br>
			Date of Birth: {$dob}<br>
			Gender: {$gender}<br>
			Email: {$email}<br>
			Phone Number: {$number}<br>
			<br>
			<h3>Professional Information:</h3>
			Educational Qualification: {$eq}<br>
			Preferred Designation: {$pd}<br>
			<br>
			<h3>Address Information:</h3>
			Address: {$address}<br>
			City: {$city}<br>
			State: {$state}<br>
			Zip Code: {$zip}<br>
			<br>
			<h3>Additional Questions:</h3>
			<b>How do you feel about working fully remotely?</b><br>
			{$q1}<br><br>
			<b>What motivates you to do your best work?</b><br>
			{$q2}<br><br>
			<b>How do you handle work under time pressure?</b><br>
			{$q3}";

		// Email headers
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
		$headers .= "From: {$email}\r\n";
		$headers .= "Reply-To: {$email}\r\n";
		$headers .= "X-Mailer: PHP/" . phpversion();

		// Handle resume upload if present
		if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
			// Create uploads directory if it doesn't exist
			if (!file_exists($this->upload_dir)) {
				mkdir($this->upload_dir, 0777, true);
			}

			$temp_name = $_FILES['resume']['tmp_name'];
			$name = basename($_FILES['resume']['name']);
			$upload_path = $this->upload_dir . $name;

			// Move uploaded file
			if (move_uploaded_file($temp_name, $upload_path)) {
				// Attach resume to email
				$file_size = filesize($upload_path);
				$handle = fopen($upload_path, "r");
				$content = fread($handle, $file_size);
				fclose($handle);
				$content = chunk_split(base64_encode($content));

				// Additional headers for attachment
				$headers .= "\r\nMIME-Version: 1.0\r\n";
				$headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

				// Email body with attachment
				$body = "--boundary\r\n";
				$body .= "Content-Type: text/html; charset=UTF-8\r\n";
				$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
				$body .= $message . "\r\n";
				$body .= "--boundary\r\n";
				$body .= "Content-Type: application/octet-stream; name=\"{$name}\"\r\n";
				$body .= "Content-Disposition: attachment; filename=\"{$name}\"\r\n";
				$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
				$body .= $content . "\r\n";
				$body .= "--boundary--";

				// Send email with attachment
				$mail_sent = mail($this->to_email, "New Job Application from {$fullName}", $body, $headers);

				// Clean up - remove uploaded file
				unlink($upload_path);
			}
		} else {
			// Send email without attachment
			$mail_sent = mail($this->to_email, "New Job Application from {$fullName}", $message, $headers);
		}

		// Send response back to client
		header('Content-Type: application/json');
		if ($mail_sent) {
			echo json_encode(['success' => true, 'message' => 'Application submitted successfully']);
		} else {
			echo json_encode(['success' => false, 'message' => 'Failed to submit application']);
		}
	}
}

// Initialize and run the form processor
$processor = new FormProcessor();
$processor->process();

 ?>