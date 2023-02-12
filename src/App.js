function App() {
  return (
    
    <div className="container mx-auto">
     <form className="mt-20">
        <div className="py-12">
            <h2 className="text-2xl font-bold">Register</h2>
            <div className="mt-8 max-w-md">
                <div className="grid gird-cols-1 gap-6">
                  <label className="block">
                      <span className="text-gray-700">Full Name</span>
                      <input
                        type="text"
                        className="mt-1 
                                   block w-full 
                                   rounded-md
                                   bg-gray-100
                                   border-transparant
                                   focus:border-gray-500
                                   focus:bg-white
                                   focus:ring-0
                                   "
                        placeholder=""
                      />
                  </label>
                  <label className="block">
                      <span className="text-gray-700">Email Address</span>
                      <input
                        type="email"
                        className="mt-1
                                   block
                                   w-full
                                   rounded-md
                                   bg-gray-100
                                   border-transparant
                                   focus:border-gray-500
                                   focus:bg-white 
                                     focus:ring-0
                                "
                                placeholder="nspace@example.com"
                      />
                  </label>
                  <label className="block">
                      <span className="text-gray-700">Birthday</span>
                      <input
                        type="date"
                        className="mt-1
                                   block
                                   w-[20rem]
                                   rounded-md
                                   bg-gray-100
                                   border-transparant
                                   focus:border-gray-500
                                   focus:bg-white 
                                     focus:ring-0
                                "
                               
                      />
                  </label>
                  <label className="block">
                      <span className="text-gray-700">Password</span>
                      <input
                        type="password"
                        className="mt-1
                                   block
                                   w-[20rem]
                                   rounded-md
                                   bg-gray-100
                                   border-transparant
                                   focus:border-gray-500
                                   focus:bg-white 
                                     focus:ring-0
                                "
                               placeholder="Password"
                      />
                  </label>
                  <label className="block">
                      <span className="text-gray-700">Confirm Password</span>
                      <input
                        type="password"
                        className="mt-1
                                   block
                                   w-[20rem]
                                   rounded-md
                                   bg-gray-100
                                   border-transparant
                                   focus:border-gray-500
                                   focus:bg-white 
                                     focus:ring-0
                                "
                                placeholder="Confirm Password"
                      />
                  </label>
                </div>
            </div>
        </div>
    </form>
    </div>
  );
}

export default App;
