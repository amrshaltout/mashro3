import react from "react";

const Contact = () => {
 
    return (
    <main id="content">

    {/* <!-- block news --> */}
    <div class="bg-gray-50 py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          {/* <!-- Left --> */}
          <div class="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-3xl font-bold">
                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Contact Us
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              <div class="flex-shrink max-w-full w-full px-3 pb-5">
                <div class="px-8 py-6 border border-gray-100 bg-white">
                  <form class="flex flex-wrap flex-row -mx-4">
                    <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                      <label for="inputfirst4" class="inline-block mb-2">First name</label>
                      <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required/>
                    </div>
                    <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                      <label for="inputlast4" class="inline-block mb-2">Last name</label>
                      <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputlast4" required/>
                    </div>
                    <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                      <label for="inpuemail4" class="inline-block mb-2">Email</label>
                      <input type="email" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inpuemail4" required/>
                    </div>
                    {/* <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                      <label for="inputurgent" class="inline-block mb-2">Urgency</label>
                      <select id="inputurgent" class="inline-block w-full leading-5 relative py-3 pl-3 pr-8 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" required>
                        <option>Low...</option>
                        <option>Medium...</option>
                        <option>Hight...</option>
                      </select>
                    </div> */}
                    <div class="flex-shrink max-w-full px-4 w-full mb-6">
                      <label for="exampleTextarea1" class="inline-block mb-2">Messages</label>
                      <textarea class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleTextarea1" rows="3"></textarea>
                    </div>
                    <div class="flex-shrink max-w-full px-4 w-full mb-6">
                      <label class="flex items-center">
                        <input type="checkbox" name="checked-demo" value="1" class="form-checkbox h-5 w-5 text-blue-500 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 focus:outline-none" required/>
                        <span class="text-gray-700 ml-4">I agree to the Terms of Use</span>
                      </label>
                    </div>
                    <div class="flex-shrink max-w-full px-4 w-full">
                      <button class="flex items-center py-3 px-5 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0" type="submit">
                        Send messages
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
            <div class="w-full bg-white">
              <div class="mb-6">
                <div class="p-4 bg-gray-100">
                  <h2 class="text-lg font-bold">Most Popular</h2>
                </div>
                <ul class="post-number">
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Why the world would end without political polls</a>
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Meet The Man Who Designed The Ducati Monster</a>
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">2020 Audi R8 Spyder spy shots release</a>
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lamborghini makes Huracán GT3 racer faster for 2019</a>
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">ZF plans $14 billion autonomous vehicle push, concept van</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-sm py-6 sticky">
              <div class="w-full text-center">
                <a class="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img class="mx-auto" src="/ads/250.jpg" alt="advertisement area"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

    );

}

export default Contact;