<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f5f5f5;
            color: #1a1a1a;
            padding: 40px 20px;
        }
        .wrapper {
            max-width: 560px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
        }
        .header {
            background: #111827;
            padding: 32px 40px;
        }
        .header h1 {
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: -0.02em;
        }
        .header p {
            color: #9ca3af;
            font-size: 13px;
            margin-top: 4px;
        }
        .body {
            padding: 36px 40px;
        }
        .field {
            margin-bottom: 24px;
        }
        .field:last-child {
            margin-bottom: 0;
        }
        .label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #6b7280;
            margin-bottom: 6px;
        }
        .value {
            font-size: 15px;
            color: #111827;
            line-height: 1.5;
        }
        .value a {
            color: #111827;
            text-decoration: underline;
        }
        .description-value {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 14px 16px;
            font-size: 14px;
            color: #374151;
            line-height: 1.6;
            white-space: pre-wrap;
        }
        .divider {
            border: none;
            border-top: 1px solid #f3f4f6;
            margin: 24px 0;
        }
        .footer {
            padding: 20px 40px;
            border-top: 1px solid #f3f4f6;
        }
        .footer p {
            font-size: 12px;
            color: #9ca3af;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>New Project Inquiry</h1>
            <p>dustinwoodard.net — Contact Form</p>
        </div>
        <div class="body">
            <div style="display: flex; gap: 32px; margin-bottom: 24px;">
                <div style="flex: 1;">
                    <div class="label">Name</div>
                    <div class="value">{{ $name }}</div>
                </div>
                <div style="flex: 1;">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:{{ $email }}">{{ $email }}</a></div>
                </div>
            </div>

            <div style="display: flex; gap: 32px; margin-bottom: 24px;">
                <div style="flex: 1;">
                    <div class="label">Budget Range</div>
                    <div class="value">{{ $budget }}</div>
                </div>
                <div style="flex: 1;">
                    <div class="label">Timeline</div>
                    <div class="value">{{ $timeline }}</div>
                </div>
            </div>

            <hr class="divider">

            <div class="field">
                <div class="label">Project Description</div>
                <div class="description-value">{{ $description }}</div>
            </div>
        </div>
        <div class="footer">
            <p>Reply directly to this email to respond to {{ $name }}.</p>
        </div>
    </div>
</body>
</html>
