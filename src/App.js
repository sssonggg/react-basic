import SayHello from './SayHello';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';

function App() {

  const looping = () => {
    const helloList = [];
    for(let i=0; i<5; i++) {
      helloList.push(<SayHello />);
    }
  };

  // jsx문법에서는 스크립트 코드를 직접 사용 불가
  // {} 안에 함수 호출문이나 변수참조 가능, ; 는 붙이지 않음
  return (
    <>
      <SubmitEvent/>
    </>

  );
}
export default App;
