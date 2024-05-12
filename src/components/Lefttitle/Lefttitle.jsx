import react from 'react';

const Lefttitle = ({title}) => {
    return(
        <div class="w-full">
        <h2 class="text-gray-800 text-2xl font-bold">
          <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{title}
        </h2>
      </div>
    );
};

export default Lefttitle;
