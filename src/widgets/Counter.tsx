import { createState} from "solid-js";


interface ICounterProps {
  end: number;
  start: number;
}
export const Counter = (props: ICounterProps) => {
  const [state, setState] = createState({ count: 0 });
  setState({count: props.start})
  if (state.count < props.end/2){
    window.setInterval(function(){
      if (state.count < props.end) {
        setState({count: state.count + 1})
      }
    }, 1);
  }  else{
    window.setInterval(function(){
      if (state.count < props.end) {
        setState({count: state.count + 1})
      }
    }, 2);
  }
  
  return (
    <div>
      {state.count}
    </div>
  );
}