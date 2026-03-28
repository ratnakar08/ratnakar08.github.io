import { Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="space-y-12 pb-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Get in Touch
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
        <a 
          href="mailto:contact@example.com" 
          className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 gap-3 bg-stone-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-full hover:-translate-y-1 transition-all shadow-md dark:shadow-indigo-500/20"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Say Hello
        </a>
        
        <a 
          href="https://linkedin.com/in/kotaratnakar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 gap-3 border-2 border-stone-200 dark:border-slate-800 text-stone-900 dark:text-slate-100 font-semibold rounded-full hover:bg-stone-50 dark:hover:bg-slate-800/50 hover:border-stone-300 dark:hover:border-slate-700 transition-all"
        >
          <Linkedin className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
