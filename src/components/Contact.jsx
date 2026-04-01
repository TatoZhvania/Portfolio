import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section name="contact" className="w-full py-24 sm:py-28 lg:py-32">
      <div className="content-shell">
        <Card
          className="mx-auto max-w-2xl border border-white/10 bg-white/5 text-white"
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-once="false"
        >
          <CardHeader className="text-center" data-aos="fade-down" data-aos-delay="180" data-aos-once="false">
            <CardTitle className="mx-auto inline-block border-b-4 border-[#00d8ff] pb-1 text-3xl font-bold text-[#9f38f9] sm:text-4xl">
              Contact
            </CardTitle>
            <p className="pt-2 text-sm text-slate-300 sm:text-base">
              {'//'} Submit the form below
            </p>
          </CardHeader>

          <CardContent>
            <form
              action="https://formsubmit.co/tato.zhvania.1@gmail.com"
              method="POST"
              target="_blank"
              noValidate
              onSubmit={onSubmit}
              className="space-y-4"
            >
              <div data-aos="fade-right" data-aos-delay="220" data-aos-once="false">
                <Input
                  type="text"
                  placeholder="Name"
                  aria-invalid={Boolean(errors.name)}
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.type === 'required' && 'This field is required.'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                  </p>
                )}
              </div>

              <div data-aos="fade-left" data-aos-delay="280" data-aos-once="false">
                <Input
                  type="email"
                  placeholder="Email"
                  aria-invalid={Boolean(errors.email)}
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" data-aos-delay="340" data-aos-once="false">
                <Textarea
                  rows={5}
                  placeholder="Message..."
                  aria-invalid={Boolean(errors.message)}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                  </p>
                )}
              </div>

              <div data-aos="zoom-in" data-aos-delay="420" data-aos-once="false">
                <Button className="h-11 w-full bg-[#7838f9] text-white hover:bg-[#6530d4]">
                  Contact Me
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
