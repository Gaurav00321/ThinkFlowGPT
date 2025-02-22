const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black w-full mt-6 p-6 text-center text-gray-400">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} ThinkFlowGpt. All rights reserved.
        </p>
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://gaurav00321.github.io/Gaurav_Portfolio/"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            Gaurav Upadhyay
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
