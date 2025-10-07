import React from 'react';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out your name, email, and message.');
            return;
        }

        const to = '1071124@hr.nl';
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject || 'New message from portfolio')}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
        window.location.href = mailto;
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div
                className="glass-shine border-4 border-black p-8 text-white shadow-2xl"
                style={{ borderRadius: '0 25px 0 25px' }}
            >
                <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'KhM, sans-serif' }}>
                    Get in Touch
                </h1>
                <p className="mb-8 text-lg opacity-90">
                    Have a question or want to work together? Send me a message and I'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-black/30 text-white placeholder-white/60 border-4 border-black focus:outline-none focus:border-green-400"
                                style={{ borderRadius: '0 18px 0 18px' }}
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-black/30 text-white placeholder-white/60 border-4 border-black focus:outline-none focus:border-green-400"
                                style={{ borderRadius: '0 18px 0 18px' }}
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            className="w-full px-4 py-3 bg-black/30 text-white placeholder-white/60 border-4 border-black focus:outline-none focus:border-green-400"
                            style={{ borderRadius: '0 18px 0 18px' }}
                            placeholder="What is this about?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            required
                            className="w-full px-4 py-3 bg-black/30 text-white placeholder-white/60 border-4 border-black focus:outline-none focus:border-green-400 resize-y"
                            style={{ borderRadius: '0 18px 0 18px' }}
                            placeholder="Write your message here..."
                        />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="custom-button-static" style={{ width: '100%' }}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;