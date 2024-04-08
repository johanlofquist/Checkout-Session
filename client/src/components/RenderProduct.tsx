interface IRenderProduct {
  name: string;
  description: string;
  image: string;
  price: number;
}

export const RenderProduct = (props: IRenderProduct) => {
  return (
    <div className="flex bg-[#f2f2f2] p-4 black-shadow w-[500px] gap-4">
      <img src={props.image} className="h-[150px]" />
      <div className="flex flex-col justify-between items-start w-full">
        <p>{props.name}</p>
        {/* <p>{props.description}</p> */}
        <p className="bg-red-300 p-2 self-end black-shadow">
          {props.price / 100}:-
        </p>
      </div>
    </div>
  );
};
