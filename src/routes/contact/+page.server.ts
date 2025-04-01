import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from './schema';

// Temporary type definitions until SvelteKit generates types
type PageServerLoad = () => Promise<any>;
type Actions = {
  default: (event: { request: Request }) => Promise<any>;
};

export const load: PageServerLoad = async () => {
  // Initialize the form with empty values
  const form = await superValidate(
    {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    zod(contactSchema)
  );
  
  return { form };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));
    
    if (!form.valid) {
      return fail(400, { form });
    }
    
    console.log("Form submitted successfully:", form.data);
    
    // Here you would typically send an email or save to a database
    // For now we'll just simulate success
    
    // Return the validated form and a success message
    return {
      form,
      success: true
    };
  }
}; 