<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactSubmission extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $name,
        public string $email,
        public string $budget,
        public string $timeline,
        public string $description,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "New project inquiry from {$this->name}",
            replyTo: [$this->email],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.contact-submission',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
