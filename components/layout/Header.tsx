import React from "react";
import Button from "@/components/common/Button";


const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="text-2xl text-black font-bold text-primary">LuxStay</div>

        {/* Search + Actions */}
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search destination..."
            className="border border-gray-300 text-sm px-3 py-1.5 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button bgColorClass = "bg-[#34967C]" label="Sign in" onClick={() => console.log("Sign in clicked")} />
          <Button label="Sign up" onClick={() => console.log("Sign up clicked")} />
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="max-w-7xl mx-auto flex gap-2 flex-wrap p-2 px-4">
        {["Rooms", "Mansion", "Countryside", "Villa", "Loft"].map((item) => (
          <span
            key={item}
            className="px-4 py-1 text-gray-600 bg-neutral hover:bg-primary hover:text-white text-secondary text-sm rounded-full cursor-pointer transition"
          >
            {item}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
