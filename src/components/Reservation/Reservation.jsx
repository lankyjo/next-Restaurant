import React from 'react'

const personOptions = [
  { value: "1-person", label: "1 Person" },
  { value: "2-person", label: "2 Person" },
  { value: "3-person", label: "3 Person" },
  { value: "4-person", label: "4 Person" },
  { value: "5-person", label: "5 Person" },
  { value: "6-person", label: "6 Person" },
  { value: "7-person", label: "7 Person" },
];

const timeOptions = [
  { value: "08:00am", label: "08 : 00 am" },
  { value: "09:00am", label: "09 : 00 am" },
  { value: "010:00am", label: "10 : 00 am" },
  { value: "011:00am", label: "11 : 00 am" },
  { value: "012:00am", label: "12 : 00 am" },
  { value: "01:00pm", label: "01 : 00 pm" },
  { value: "02:00pm", label: "02 : 00 pm" },
  { value: "03:00pm", label: "03 : 00 pm" },
  { value: "04:00pm", label: "04 : 00 pm" },
  { value: "05:00pm", label: "05 : 00 pm" },
  { value: "06:00pm", label: "06 : 00 pm" },
  { value: "07:00pm", label: "07 : 00 pm" },
  { value: "08:00pm", label: "08 : 00 pm" },
  { value: "09:00pm", label: "09 : 00 pm" },
  { value: "10:00pm", label: "10 : 00 pm" },
];

const Reservation = () => {
  return (
    <section id='contact' className='relative bg-smoky-black-1 md:px-20 py-20'>
      <div className='container mx-auto px-4 xl:px-0 flex flex-col lg:flex-row min-h-[500px] relative z-50'>
      {/* FORM AREA */}
        <div className='flex-2 space-y-10 px-5 md:px-10 py-10 md:py-20 bg-smoky-black-1'>
          <div className='text-center space-y-2'>
            <h4 className='font-forum-display text-4xl md:text-6xl'>Stay Connected</h4>
            <p>Subscribe to our Newsletter</p>
          </div>

          <div className='space-y-5'>
            <div className='flex flex-col md:flex-row gap-5'>
              <Inputs type='text' placeholder='Your Name' />
              <Inputs type='tel' placeholder='Phone Number' />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
              {/* <Select options={personOptions} placeholder='Person' />
              <Inputs type='date' placeholder='Date' />
              <Select options={timeOptions} placeholder='Time' /> */}
              <Inputs type={'email'} placeholder={'Email'}/>
            </div>
            {/* <textarea className='border border-white-alpha-10 p-4 bg-eerie-black-4 w-full focus:border-gold-crayola outline-none min-h-40' placeholder='message'></textarea> */}
                              <button className="md:flex-1 w-full cursor-pointer group border border-transparent hover:border-gold-crayola relative md:inline-block text-[14px] font-medium uppercase py-4 px-10 bg-gold-crayola text-black overflow-hidden">
                    <p className="relative text-sm tracking-widest z-10 transition-colors duration-300 group-hover:text-gold-crayola">
                      Subscribe Now
                    </p>
                    <span className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full z-0" />
                  </button>
          </div>

        </div>

      {/* CONTACT AREA */}
        <div className='flex-1 bg-[url(/images/form-pattern.png)] capitalize text-center bg-smoky-black-2 px-5 md:px-10 py-10 md:py-20 space-y-10'>
          <h4 className='font-forum-display text-5xl'>Contact Us</h4>
          <div>
            <p className='font-bold'>booking request</p>
            <p className='text-3xl text-gold-crayola'>+88-123-123456</p>
          </div>

          <div>
            <p className='font-bold'>location</p>
            <p className='text-white/60 text-sm'>Restaurant St, Delicious City, <br /> London 9578, UK</p>
          </div>

          <div>
            <p className='font-bold'>Lunch Time</p>
            <p className='text-white/60 text-sm'>Monday to Sunday <br /> 11.00 am - 2.30pm</p>
          </div>

          <div>
            <p className='font-bold'>Dinner Time</p>
            <p className='text-white/60 text-sm'>Monday to Sunday <br /> 05.00 pm - 10.00pm</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation

function Inputs({type, placeholder}){
  return(
    <input className='border border-white-alpha-10 p-4 bg-eerie-black-4 w-full focus:border-gold-crayola outline-none' type={type} placeholder={placeholder} />
  )
}
function Select({ options = [], placeholder }) {
  return (
    <select defaultValue={''} className="border border-white-alpha-10 p-4  bg-eerie-black-4 w-full focus:border-gold-crayola outline-none text-white">
      {options.map((option, index) => (
        <option className='px-4' key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
}