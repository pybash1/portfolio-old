function Navbar() {
  return (
    <nav className="bg-gray-900 py-4 font-normal">
      <div className="flex flex-row justify-center">
        <a className="font-semibold text-white text-center text-lg px-4 transition ease-in-out bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#3BB1FF] hover:to-[#3064FF]" href="#">Home</a>
        <a className="font-semibold text-white text-center text-lg px-4 transition ease-in-out bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#3BB1FF] hover:to-[#3064FF]" href="#about">About Me</a>
        <a className="font-semibold text-white text-center text-lg px-4 transition ease-in-out bg-clip-text hover:text-transparent hover:bg-gradient-to-l hover:from-[#3BB1FF] hover:to-[#3064FF]" href="#projects">Projects</a>
        <a className="font-semibold text-white text-center text-lg px-4 transition ease-in-out bg-clip-text hover:text-transparent hover:bg-gradient-to-l hover:from-[#3BB1FF] hover:to-[#3064FF]" href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;
