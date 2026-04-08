<?php

namespace App\Http\Controllers;

use App\Mail\ContactSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'budget' => ['required', 'string'],
            'timeline' => ['required', 'string'],
            'description' => ['required', 'string', 'max:2000'],
        ]);

        Mail::to(config('mail.from.address'))->send(new ContactSubmission(
            name: $validated['name'],
            email: $validated['email'],
            budget: $validated['budget'],
            timeline: $validated['timeline'],
            description: $validated['description'],
        ));

        return back()->with('success', true);
    }
}
