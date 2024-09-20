import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { useEffect } from "react";
import { useState } from "react";
import { Add } from "./Add";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  addAsync,
} from "./features/counter/counterSlice";
import {
  selectImgId,
  selectImgUrl,
  addID,
  getImg,
} from "./features/img/imgSlice";

export function App() {
  const [numcount, setNumCount] = useState("5");
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const imgUrl = useSelector(selectImgUrl);
  const imgID = useSelector(selectImgId);
  
  useEffect(() => {
    if (imgID !== 0) {
      dispatch(getImg(imgID));
    }
  }, [dispatch, imgID]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>我愛金珉奎</h1>
      <div className="card">
        <div className="card__bar">
          <button
            className="card__button"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <p className="card__text">{count}</p>
          <button
            className="card__button"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>

      <Add
        value={numcount}
        onChange={(e) => setNumCount(e.target.value)}
        onClick={() => dispatch(incrementByAmount(Number(numcount) || 0))}
        onAsync={() => dispatch(addAsync(Number(numcount) || 0))}
      />

      <div className="card__imgbar">
        <button
          className="card__button"
          onClick={() => {
            dispatch(addID());
          }}
        >
          圖片
        </button>
        <img className="card__img" src={imgUrl} alt="圖片" />
      </div>
    </>
  );
}
