<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { login } from '@/routes';

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string | null;
    url: string | null;
    tags: string[] | null;
}

withDefaults(
    defineProps<{
        canRegister: boolean;
        portfolioItems: PortfolioItem[];
    }>(),
    {
        canRegister: true,
        portfolioItems: () => [],
    },
);

const services = [
    {
        title: 'Custom Website Development',
        description: 'Hand-coded, performant websites built to your exact specs — no page builders, no bloat.',
    },
    {
        title: 'Landing Pages',
        description: 'High-converting single pages designed to turn visitors into leads and customers.',
    },
    {
        title: 'Website Redesigns',
        description: 'Transform an outdated site into a modern, fast experience that reflects your brand.',
    },
    {
        title: 'Performance Optimization',
        description: 'Speed audits and fixes that improve Core Web Vitals, SEO rankings, and user experience.',
    },
];

const pricingTiers = [
    {
        name: 'Starter',
        price: '$2,500+',
        description: 'Perfect for small businesses that need a clean, professional web presence.',
        features: ['4–6 pages', 'Mobile responsive', 'SEO-ready', 'Contact form', 'Fast delivery'],
        recommended: false,
    },
    {
        name: 'Growth',
        price: '$5,000+',
        description: 'Conversion-focused builds for businesses serious about generating leads online.',
        features: ['Everything in Starter', 'CMS integration', 'Performance optimization', 'Analytics setup', 'A/B testing ready'],
        recommended: true,
    },
    {
        name: 'Custom',
        price: '$8,000+',
        description: 'Advanced features, third-party integrations, and custom systems for complex needs.',
        features: ['Everything in Growth', 'Custom integrations', 'E-commerce', 'Advanced functionality', 'Ongoing support'],
        recommended: false,
    },
];


const processSteps = [
    { number: '01', title: 'Discovery', description: 'We talk through your goals, audience, and what success looks like for your project.' },
    { number: '02', title: 'Strategy', description: 'I map out the site structure, content hierarchy, and conversion approach.' },
    { number: '03', title: 'Design', description: 'Clean, modern mockups that reflect your brand and are built to convert.' },
    { number: '04', title: 'Development', description: 'Fast, hand-coded builds with clean markup, optimized assets, and zero bloat.' },
    { number: '05', title: 'Launch', description: 'Thorough testing, deployment, and handoff — with support after you go live.' },
];
</script>

<template>
    <Head title="Dustin Woodard — Web Developer">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="description" content="Custom high-performance websites that drive results. I design and build fast, modern websites for businesses that want more leads and better performance." />
    </Head>

    <div class="min-h-screen bg-white text-gray-900" style="font-family: 'Inter', sans-serif;">

        <!-- Nav -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span class="font-semibold text-gray-900 tracking-tight">Dustin Woodard</span>
                <div class="flex items-center gap-6">
                    <a href="#services" class="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Services</a>
                    <a href="#pricing" class="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Pricing</a>
                    <a href="#work" class="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Work</a>
                    <a href="#contact" class="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">Get a Quote</a>
                </div>
            </div>
        </nav>

        <!-- Hero -->
        <section class="pt-40 pb-28 px-6">
            <div class="max-w-4xl mx-auto">
                <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Available for new projects</p>
                <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08] mb-8">
                    Custom Websites<br />That Drive Results
                </h1>
                <p class="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
                    I design and build fast, modern websites for businesses that want more leads and better performance.
                </p>
                <div class="flex flex-wrap items-center gap-4">
                    <a href="#contact" class="bg-gray-900 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                        Start a Project
                    </a>
                    <a href="#work" class="text-gray-600 px-7 py-3.5 rounded-lg font-medium border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-colors">
                        View Work
                    </a>
                </div>
                <div class="mt-16 flex flex-wrap gap-8 text-sm text-gray-400">
                    <span>Fast delivery</span>
                    <span>SEO-ready</span>
                    <span>Built to convert</span>
                    <span>Mobile-first</span>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section id="services" class="py-24 px-6 bg-gray-50">
            <div class="max-w-6xl mx-auto">
                <div class="mb-14">
                    <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">What I do</p>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Services</h2>
                </div>
                <div class="grid sm:grid-cols-2 gap-6">
                    <div
                        v-for="service in services"
                        :key="service.title"
                        class="bg-white p-8 rounded-xl border border-gray-100"
                    >
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
                        <p class="text-gray-500 leading-relaxed">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing -->
        <section id="pricing" class="py-24 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="mb-14">
                    <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Transparent pricing</p>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Investment</h2>
                </div>
                <div class="grid sm:grid-cols-3 gap-6 mb-10">
                    <div
                        v-for="tier in pricingTiers"
                        :key="tier.name"
                        :class="[
                            'rounded-xl p-8 border transition-all',
                            tier.recommended
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white border-gray-100'
                        ]"
                    >
                        <div class="flex items-start justify-between mb-6">
                            <div>
                                <p :class="['text-sm font-medium uppercase tracking-widest mb-1', tier.recommended ? 'text-gray-400' : 'text-gray-400']">
                                    {{ tier.name }}
                                </p>
                                <p :class="['text-4xl font-bold tracking-tight', tier.recommended ? 'text-white' : 'text-gray-900']">
                                    {{ tier.price }}
                                </p>
                            </div>
                            <span v-if="tier.recommended" class="text-xs bg-white text-gray-900 px-2.5 py-1 rounded-full font-medium">
                                Popular
                            </span>
                        </div>
                        <p :class="['text-sm leading-relaxed mb-8', tier.recommended ? 'text-gray-400' : 'text-gray-500']">
                            {{ tier.description }}
                        </p>
                        <ul class="space-y-3">
                            <li
                                v-for="feature in tier.features"
                                :key="feature"
                                :class="['flex items-center gap-2.5 text-sm', tier.recommended ? 'text-gray-300' : 'text-gray-600']"
                            >
                                <svg class="w-4 h-4 shrink-0" :class="tier.recommended ? 'text-gray-400' : 'text-gray-400'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#contact" class="inline-block bg-gray-900 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                        Request a Custom Quote
                    </a>
                </div>
            </div>
        </section>

        <!-- Portfolio -->
        <section id="work" class="py-24 px-6 bg-gray-50">
            <div class="max-w-6xl mx-auto">
                <div class="mb-14">
                    <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Recent work</p>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Portfolio</h2>
                </div>
                <div v-if="portfolioItems.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <component
                        :is="item.url ? 'a' : 'div'"
                        v-for="item in portfolioItems"
                        :key="item.id"
                        :href="item.url ?? undefined"
                        :target="item.url ? '_blank' : undefined"
                        :rel="item.url ? 'noopener noreferrer' : undefined"
                        class="bg-white rounded-xl border border-gray-100 overflow-hidden group"
                        :class="{ 'hover:border-gray-200 transition-colors': item.url }"
                    >
                        <div class="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                v-if="item.image"
                                :src="`/storage/${item.image}`"
                                :alt="item.title"
                                class="w-full h-full object-cover"
                            />
                            <span v-else class="text-gray-300 text-sm">Screenshot</span>
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ item.description }}</p>
                            <div v-if="item.tags?.length" class="flex flex-wrap gap-2">
                                <span
                                    v-for="tag in item.tags"
                                    :key="tag"
                                    class="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </component>
                </div>
                <p v-else class="text-gray-400 text-sm">Projects coming soon.</p>
            </div>
        </section>

        <!-- Process -->
        <section class="py-24 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="mb-14">
                    <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">How it works</p>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Process</h2>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div
                        v-for="step in processSteps"
                        :key="step.number"
                        class="relative"
                    >
                        <p class="text-5xl font-bold text-gray-100 mb-4 leading-none">{{ step.number }}</p>
                        <h3 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section id="contact" class="py-24 px-6 bg-gray-900">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                    Ready to build something that actually performs?
                </h2>
                <p class="text-lg text-gray-400 mb-10">
                    Tell me about your project. I'll get back to you within one business day.
                </p>

                <!-- Contact Form -->
                <form class="bg-white rounded-2xl p-8 text-left space-y-5">
                    <div class="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                            <input
                                type="text"
                                placeholder="Jane Smith"
                                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                            <input
                                type="email"
                                placeholder="jane@company.com"
                                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                        <select class="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white">
                            <option value="" disabled selected>Select a range</option>
                            <option>$2,500 – $5,000</option>
                            <option>$5,000 – $8,000</option>
                            <option>$8,000+</option>
                            <option>Not sure yet</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                        <select class="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white">
                            <option value="" disabled selected>Select a timeline</option>
                            <option>ASAP (within 2 weeks)</option>
                            <option>1 month</option>
                            <option>2–3 months</option>
                            <option>Flexible</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">Project Description</label>
                        <textarea
                            rows="4"
                            placeholder="Tell me about your project, goals, and anything else that's helpful..."
                            class="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-gray-900 text-white py-3.5 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 px-6 border-t border-gray-100">
            <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <span>© {{ new Date().getFullYear() }} Dustin Woodard. All rights reserved.</span>
                <a href="/admin" class="hover:text-gray-600 transition-colors">Admin</a>
            </div>
        </footer>

    </div>
</template>
