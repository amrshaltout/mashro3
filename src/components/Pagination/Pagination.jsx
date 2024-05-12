import react from 'react';

const Pagination = () =>{
    return(
        <div class="text-center mt-4">
        {/* <!-- center pagination --> */}
        <nav aria-label="Page navigation">
          <ul class="flex justify-center space-x-0">
            <li>
              <a class="block relative py-3 px-4 bg-whiteborder border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-l bg-gray-700 dark:bg-gray-700 text-gray-100" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li><a class="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href="#">1</a></li>
            <li><a class="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href="#">2</a></li>
            <li><a class="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5" href="#">3</a></li>
            <li>
              <a class="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    );
};

export default Pagination;