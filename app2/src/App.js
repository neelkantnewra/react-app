import './App.css';

function App() {
  return (
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
    <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
      Sign in
    </a>
    <a
      href="#"
      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >
      Sign up
    </a>
    <div className='brand'>Deep-Cart</div> 
       <div className='sub-nav'></div>
  </div>
  );
}

export default App;
