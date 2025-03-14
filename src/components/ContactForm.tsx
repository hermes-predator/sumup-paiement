
import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-sm text-gray-600 space-y-4">
      <p>Pour toute demande ou si vous avez le moindre problème en passant commande, vous pouvez nous contacter.</p>
      <p>Pour cela, nous vous invitons à nous fournir quelques informations pour nous aider à vous identifier :</p>
      <ul className="list-disc ml-4 space-y-1">
        <li>Votre nom et prénom</li>
        <li>La date et l'heure d'achat</li>
        <li>Une preuve d'achat</li>
      </ul>
      <p className="flex items-center gap-2 mt-4">
        <Mail className="w-4 h-4" />
        <a href="mailto:contact@logo-foot.com" className="text-blue-600 hover:underline">contact@logo-foot.com</a>
      </p>
    </div>
  );
};

export default ContactForm;
