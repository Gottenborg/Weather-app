export const CalamityButton = ({changeView}:{changeView:()=>void}) => {
  return (
    <button
      onClick={() =>{
        console.log("CalamityButton") 
        changeView()
      }}
      type="button"
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300"
    >
      I do not want to go to the office
    </button>
  );
}