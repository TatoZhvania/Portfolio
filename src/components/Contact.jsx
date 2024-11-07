import { useForm } from 'react-hook-form';

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
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 "
    >
      <form
        action="https://formsubmit.co/tatojvania.03@gmail.com"
        onSubmit={onSubmit}
        method="POST"
        target="_blank"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <div data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
            <p className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[140px] mt-8">
              Contact
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
            <p className="text-gray-300 py-4">
              {'//'} Submit the form below or shoot me an email -
              tatojvania.03@gmail.com
            </p>
          </div>
        </div>

        <input
          className="bg-[#f0f0f0] p-2 placeholder-[#1c1c1c] rounded-sm w-full"
          required
          type="text"
          placeholder="Name"
          name="name"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false"
          {...register('name', {
            require: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="text-red mt-1">
            {errors.name.type === 'required' && 'This field is required.'}
            {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
          </p>
        )}

        <input
          className="my-4 p-2 bg-[#f0f0f0] placeholder-[#1c1c1c] rounded-sm w-full"
          type="email"
          placeholder="Email"
          required
          name="email"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-once="false"
          {...register('email', {
            require: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="text-red mt-1">
            {errors.email.type === 'required' && 'This field is required.'}
            {errors.email.type === 'pattern' && 'Inavlid email address!'}
          </p>
        )}

        <textarea
          className="bg-[#f0f0f0] p-2 max-h-[200px] placeholder-[#1c1c1c] rounded-sm w-full"
          required
          name="message"
          placeholder="Message..."
          rows="3"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-once="false"
          {...register('message', {
            require: true,
            maxLength: 2000,
          })}
        ></textarea>
        {errors.message && (
          <p className="text-red mt-1">
            {errors.message.type === 'required' && 'This field is required.'}
            {errors.message.type === 'maxLength' && 'Max length is 2000 char!'}
          </p>
        )}
        <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
          <button
            className="max-w-[170px] mx-auto py-3 mt-6 text-[#fff] cursor-pointer border-2 px-7  my-4 flex items-center transition duration-250 ease-in-out hover:bg-[#7838f9] hover:border-[#7838f9]"
            type="submit"
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
