import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BookingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(
    date.toISOString().split("T")[0]
  );

  const onSubmit = (data) => {
    alert("Booked succesfully");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="flex flex-col justify-center items-center rounded-[10px] py-10 px-5 bg-white">
      <div className="inputs flex flex-wrap justify-center items-center gap-12">
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center  items-start">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("first name")}
            id="firstName"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("last name")}
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="phone">Phone Number</label>
          <input
            {...register("phone number")}
            id="phone"
            type="tel"
            placeholder="Enter Phone Number"
          />
        </div>
      </div>
        
      <div className="inputs flex flex-wrap justify-center items-center gap-12">
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="roomType"> Vehical Type</label>
          <select
            name="roomType"
            id="roomType"
            className="border border-e-black  bg-inputColor px-[15px] py-[10px] pr-[50px] rounded">
            <option value="single">Two Wheeler</option>
            <option value="double">Four Wheeler</option>
            <option value="sweat">Heavy Vehicals</option>
          </select>
        </div>
        
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="from">From</label>
          <input
            type="date"
            name="from"
            id="from"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="to">To</label>
          <input
            type="date"
            name="to"
            id="to"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
      </div>
      <div className="services w-full flex flex-col items-start gap-[10px] my-[20px]">
        <div className="restaurant w-full flex gap-[5px]">
          <input
            type="checkbox"
            name="restaurant-service"
            id="restaurant-service"
          />
          <label htmlFor="restaurant-service">Car Wash</label>
        </div>
        <div className="spa w-full flex gap-[5px]">
          <input type="checkbox" name="spa-service" id="spa-service" />
          <label htmlFor="spa-service">Cleaning</label>
        </div>
      </div>
      <div className="price w-full flex justify-start gap-2">
        <span className="font-bold">Total: </span> 15000DA
      </div>
      <button
        type="submit"
        className="booking-btn bg-gradient-to-r from-[#608AF5] to-[#1E5EFF] text-white py-[10px] w-[200px] rounded-[10px]">
        Book Slot
      </button>
    </form>
  );
};

export default BookingForm;
