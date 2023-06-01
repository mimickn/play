import { useRef, useState } from "react";
import { Allotment } from "allotment";
import { Header } from "@/components/Header";
import { Pane, SubPane } from "@/components/Pane";
import "allotment/dist/style.css";
import styles from "./split-pane.module.css";

export default function Index() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isVertical, setIsVertical] = useState(false);

  return (
    <div className={styles.container}>
      <Header>
        <button
          type="button"
          onClick={() => {
            setIsVertical(!isVertical);
          }}
        >
          Change Direction
        </button>
        <button
          type="button"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Change Visiable
        </button>
      </Header>
      <Allotment
        ref={ref}
        key={isVertical ? "vertical" : "horizon"}
        vertical={isVertical}
      >
        <Allotment.Pane>
          <Pane />
        </Allotment.Pane>
        {
          visible ? (
            <Allotment.Pane>
              <SubPane />
            </Allotment.Pane>
          ) : null
        }
      </Allotment>
    </div>
  );
}