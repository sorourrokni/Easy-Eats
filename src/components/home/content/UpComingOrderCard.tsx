import { Card, Drawer, Flex, Progress } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./UpComingOrderCard.module.css";
import DefaultButton from "../button/DefaultButton";
import timeIcon from "../../../assets/icons/Clock.svg";
import { useEffect, useState } from "react";
import mapImg from "../../../assets/images/Map.png";
import mapColoredIcon from "../../../assets/icons/ColoredMap.svg";
import timeColoerdIcon from "../../../assets/icons/coloredClock.svg";
import clockFillIcon from "../../../assets/icons/clock-fill.svg";
import Item from "./Item";
import okIcon from "../../../assets/icons/Oktick.svg";

interface CardProps {
  name: string;
  id: string;
  time: number;
  percent1: number;
  percent2: number;
  percent3: number;
  onWayTime?: string;
  readyTime?: string;
  deliveredTime?: string;
}
function UpComingOrderCard({ name, id, time }: CardProps) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [percent3, setPercent3] = useState(0);

  useEffect(() => {
    const totalTime = time * 60 * 1000;
    let startTime = Date.now();

    const interval1 = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      setPercent1(() => Math.min((elapsedTime / (totalTime / 3)) * 100, 100));

      if (elapsedTime >= totalTime / 3) {
        clearInterval(interval1);
        startTime = currentTime;

        const interval2 = setInterval(() => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;

          setPercent2(() =>
            Math.min((elapsedTime / (totalTime / 3)) * 100, 100)
          );

          if (elapsedTime >= totalTime / 3) {
            clearInterval(interval2);
            startTime = currentTime;

            const interval3 = setInterval(() => {
              const currentTime = Date.now();
              const elapsedTime = currentTime - startTime;

              setPercent3(() =>
                Math.min((elapsedTime / (totalTime / 3)) * 100, 100)
              );

              if (elapsedTime >= totalTime / 3) {
                clearInterval(interval3);
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);

    return () => {
      clearInterval(interval1);
    };
  }, [time]);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      bodyStyle={{ padding: "16px", width: "100%" }}
    >
      <Flex className={styles.row1}>
        <h4 className={`h4-bold`}>{name}</h4>
        <p className={`body3-regular`}>{id}</p>
      </Flex>
      <Flex className={styles.row1}>
        <Flex className={styles.row2}>
          <BaseIcon srcSet={timeIcon} alt={""}></BaseIcon>
          <Flex className={styles.col}>
            <p className={`${styles.arrival} body3-regular`}>
              Estimated arrival
            </p>
            <h2 className={`${styles.time} h2-bold`}>{`${time} min`}</h2>
          </Flex>
        </Flex>
        <DefaultButton
          textButton="Track"
          buttonType="primary"
          onClick={showDrawer}
          isSelected={true}
        ></DefaultButton>
      </Flex>
      <Flex className={styles.row3}>
        <Progress
          style={{ width: "28px", margin: "0" }}
          percent={percent1}
          status={percent1 > 0 && percent1 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
        <Progress
          style={{ width: "64px", margin: "0" }}
          percent={percent2}
          status={percent2 > 0 && percent2 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
        <Progress
          style={{ width: "200px", margin: "0" }}
          percent={percent3}
          status={percent3 > 0 && percent3 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
      </Flex>
      <Drawer
        placement="right"
        open={drawerVisible}
        onClose={onCloseDrawer}
        width={400}
        className={styles.drawer}
        styles={{ body: { padding: 0 }, header: { display: "none" } }}
      >
        <Flex className={styles.drawerCol}>
          <img className={styles.mapImg} src={mapImg}></img>
          <Flex className={styles.drawerRow}>
            <Flex className={styles.row2}>
              <BaseIcon srcSet={timeColoerdIcon} alt={""}></BaseIcon>
              <Flex className={styles.col}>
                <p className={`${styles.arrival} body3-regular`}>
                  Estimated arrival
                </p>
                <h2 className={`${styles.time} h2-bold`}>{`${time} min`}</h2>
              </Flex>
            </Flex>
            <Flex className={styles.row2}>
              <BaseIcon srcSet={mapColoredIcon} alt={""}></BaseIcon>
              <Flex className={styles.col}>
                <p className={`${styles.arrival} body3-regular`}>Distance</p>
                <h2 className={`${styles.time} h2-bold`}>{`${time} Km`}</h2>
              </Flex>
            </Flex>
          </Flex>
          <Flex className={styles.drawerRow2}>
            <Progress
              style={{ width: "28px", margin: "0" }}
              percent={percent1}
              status={percent1 > 0 && percent1 < 100 ? "active" : "normal"}
              showInfo={false}
              strokeColor={"var(--secondary-color-100)"}
            />
            <Progress
              style={{ width: "64px", margin: "0" }}
              percent={percent2}
              status={percent2 > 0 && percent2 < 100 ? "active" : "normal"}
              showInfo={false}
              strokeColor={"var(--secondary-color-100)"}
            />
            <Progress
              style={{ width: "200px", margin: "0" }}
              percent={percent3}
              status={percent3 > 0 && percent3 < 100 ? "active" : "normal"}
              showInfo={false}
              strokeColor={"var(--secondary-color-100)"}
            />
          </Flex>
          <Flex className={styles.drawerCol2}>
            <Item
              icon={percent3 === 100 ? okIcon : clockFillIcon}
              title="Delivered"
            ></Item>
            <Item
              icon={percent2 === 100 ? okIcon : clockFillIcon}
              title="On the way"
            ></Item>
            <Item
              icon={percent1 === 100 ? okIcon : clockFillIcon}
              title="Food is ready"
            ></Item>
            <Flex className={styles.drawerRow3}>
              <DefaultButton
                textButton="Get help"
                buttonType="primary"
                onClick={() => {}}
                className={styles.button}
              ></DefaultButton>
              <DefaultButton
                textButton="Call to (Edward)"
                buttonType="primary"
                onClick={showDrawer}
                isSelected={true}
                className={styles.button}
              ></DefaultButton>
            </Flex>
          </Flex>
        </Flex>
      </Drawer>
    </Card>
  );
}

export default UpComingOrderCard;
