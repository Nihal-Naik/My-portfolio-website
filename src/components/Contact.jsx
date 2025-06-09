import React from 'react'

const Contact = ({contactref}) => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07f56216-14fb-485d-8b28-c77dff326642");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div ref={contactref} className='md:mt-[5%] mb-[5%] font-space relative grid gap-3 justify-center m-auto items-center'>
      <div className='bg-[rgba(0,0,0,0.6)] rounded-xl  pt-10 pb-20 pr-30 pl-30'>
        <h1 className='text-white text-3xl sm:text-5xl text-center mb-4'>Contact me</h1>
        <form onSubmit={onSubmit} className='  grid justify-center  text-white text-lg '>
          <input className='outline-0 border-b-1 border-white p-1 mb-6' placeholder='name' type="text" name="name" required />
          <input className='outline-0 border-b-1 border-white p-1 mb-6' placeholder='email' type="email" name="email" required />
          <textarea className='outline-0 h-[6rem] sm:h-[8rem] w-[15rem] sm:w-[20rem] border-1 border-white p-1 mb-6' placeholder='message' name="message" required></textarea>

          <button className='rounded-md p-2 cursor-pointer bg-white text-black' type="submit">Submit Form</button>

          <span className='font-space text-white'>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
