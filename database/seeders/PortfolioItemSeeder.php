<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortfolioItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Modern E-commerce Platform',
                'description' => 'A high-performance e-commerce solution built with Laravel and Vue, featuring real-time inventory management and a seamless checkout experience.',
                'image' => 'https://images.unsplash.com/photo-1557821552-1a86e5df7ad9?q=80&w=800&h=600&auto=format&fit=crop',
                'url' => 'https://example.com/ecommerce',
                'tags' => ['Laravel', 'Vue.js', 'Stripe', 'Tailwind CSS'],
                'sort_order' => 1,
                'is_visible' => true,
            ],
            [
                'title' => 'AI-Powered Analytics Dashboard',
                'description' => 'Complex data visualization tool that processes millions of events per second to provide actionable business insights using machine learning.',
                'image' => 'https://images.unsplash.com/photo-1460925895917-afbd8446c0a3?q=80&w=800&h=600&auto=format&fit=crop',
                'url' => 'https://example.com/analytics',
                'tags' => ['Python', 'React', 'PostgreSQL', 'AWS'],
                'sort_order' => 2,
                'is_visible' => true,
            ],
            [
                'title' => 'SaaS Project Management Tool',
                'description' => 'A collaborative workspace for remote teams to manage sprints, track tasks, and automate workflows with a focus on developer experience.',
                'image' => 'https://images.unsplash.com/photo-1454165833767-2353ad476180?q=80&w=800&h=600&auto=format&fit=crop',
                'url' => 'https://example.com/project-mgmt',
                'tags' => ['PHP', 'Livewire', 'MySQL', 'Alpine.js'],
                'sort_order' => 3,
                'is_visible' => true,
            ],
            [
                'title' => 'Healthcare Patient Portal',
                'description' => 'Secure, HIPAA-compliant portal for patients to access medical records, schedule appointments, and communicate with providers.',
                'image' => 'https://images.unsplash.com/photo-1504827916157-777667da3712?q=80&w=800&h=600&auto=format&fit=crop',
                'url' => 'https://example.com/health-portal',
                'tags' => ['Laravel', 'Vue.js', 'Redis', 'Docker'],
                'sort_order' => 4,
                'is_visible' => true,
            ],
            [
                'title' => 'Fintech Budgeting App',
                'description' => 'Mobile-first application helping users track spending, set financial goals, and automate savings using open banking APIs.',
                'image' => 'https://images.unsplash.com/photo-1551288049-beb8a6977577?q=80&w=800&h=600&auto=format&fit=crop',
                'url' => 'https://example.com/budget-app',
                'tags' => ['React Native', 'Node.js', 'MongoDB', 'Azure'],
                'sort_order' => 5,
                'is_visible' => true,
            ],
        ];

        foreach ($projects as $project) {
            \App\Models\PortfolioItem::create($project);
        }
    }
}
