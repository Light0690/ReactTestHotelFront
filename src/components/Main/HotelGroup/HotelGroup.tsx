import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";

import { hotelType } from "../../../redux/slices/mainSlice"; 

import HotelItem from "../HotelItem/HotelItem";
import HotelSkeleton from "../HotelSkeleton/HotelSkeleton";

import styles from "./HotelGroup.module.scss";


interface groupProps {
  hotels: hotelType[];
}

const HotelGroup: FC<groupProps> = ({ hotels }) => {
  const isLoading = useAppSelector((state) => state.main.isLoading);
  const favorites = useAppSelector((state) => state.main.favorites);
 
  const hotelsTSX = hotels.length ? (
    hotels.map(({ hotelId, hotelName, priceAvg, stars }) => (
      <div className={styles.wrapper__item} key={hotelId}>
        <div className={styles.wrapper__icon}>
          <svg
            width="75"
            height="75"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="Ellipse 6"
              cx="32"
              cy="32"
              r="32"
              fill="#41522E"
              fillOpacity="0.05"
            />
          </svg>
          <svg
            className={styles.wrapper__house}
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="house" clipPath="url(#clip0_6_124)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M15.9359 1.33499C15.1648 2.06053 12.0586 4.98008 9.03711 7.82127C6.01289 10.6596 3.11719 13.3847 2.59766 13.8722C2.07812 14.3598 1.33984 15.0534 0.957031 15.4104C0.574219 15.7702 0.202344 16.1214 0.13125 16.1939L0 16.3245L0.902344 17.3983C1.39727 17.9875 1.82109 18.4692 1.84023 18.4692C1.86211 18.4663 3.48906 16.9572 5.45781 15.1143C15.7883 5.44442 17.4562 3.88887 17.4754 3.89468C17.4863 3.90048 18.7605 5.09326 20.3082 6.54723C21.8531 8.0012 25.3449 11.2806 28.0629 13.8374C30.7809 16.3942 33.0176 18.4866 33.0312 18.4866C33.0449 18.4866 33.0641 18.4721 33.0723 18.4576C33.0859 18.4344 33.1023 18.4373 33.1297 18.4605C33.1816 18.504 33.1023 18.5911 34.0566 17.4419C34.475 16.9398 34.8578 16.4813 34.9098 16.4232L35.0027 16.3187L32.7113 14.1741C31.4508 12.9929 28.4895 10.2184 26.127 8.00991C23.7672 5.79848 20.8797 3.09659 19.7094 2.00248L17.5875 0.0145168H17.4645H17.3414L15.9359 1.33499Z"
                  fill="#41522E"
                />
                <path
                  id="Vector_2"
                  d="M15.6051 8.00708C14.6098 8.94157 11.859 11.5274 9.49375 13.7504L5.19531 17.7931L5.20078 26.1281L5.20898 34.4631L5.26914 34.5821C5.30195 34.6489 5.38125 34.7504 5.44414 34.8056C5.67109 35.0145 5.37852 35 9.7125 35H13.6172L13.6227 31.3056C13.6309 27.6315 13.6309 27.614 13.6883 27.4834C13.7594 27.3151 13.8961 27.17 14.0547 27.0946C14.1777 27.0336 14.1969 27.0336 17.4016 27.0249C20.9672 27.0162 20.8141 27.0104 21.0164 27.199C21.1586 27.3325 21.2379 27.4805 21.2707 27.6721C21.2926 27.7882 21.3008 28.9897 21.3008 31.4217V35L25.3586 34.9942L29.4191 34.9855L29.5012 34.9014C29.5477 34.8549 29.6242 34.7185 29.6734 34.5966L29.7637 34.3761L29.7691 26.0759L29.7746 17.7757L23.6496 12.044C20.177 8.79356 17.5 6.30932 17.4699 6.30932C17.4344 6.30642 16.7945 6.88975 15.6051 8.00708Z"
                  fill="#41522E"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_6_124">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <HotelItem
          hotelId={hotelId}
          hotelName={hotelName}
          priceAvg={priceAvg}
          stars={stars}
        />
      </div>
    ))
  ) : (
    <h2 className={styles.empty}>Нет подходящих отелей</h2>
  );
  const skeletonsTSX = [...new Array(4)].map((_, id) => (
    <HotelSkeleton key={id} />
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__title}>
        Добавлено в избранное : <b>{favorites.length}</b> отеля
      </div>
      <div className={styles.wrapper__group}>
        {isLoading ? skeletonsTSX : hotelsTSX}
      </div>
    </div>
  );
};

export default HotelGroup;
