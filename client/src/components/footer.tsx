import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © 2024 <span className="text-gradient font-semibold">Binit Deb</span>. All rights reserved. Built with passion and modern web technologies.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
