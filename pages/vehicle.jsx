import styles from "../components/Vehicles/vehicles.module.scss";

export default function login() {
  const temptation = () => {};
  return (
    <div className={styles.page}>
      <div className={styles.images}>
        <img src="https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2690807.jpg&fm=jpg" />
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
        <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
        <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
        <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?cs=srgb&dl=pexels-oziel-g%C3%B3mez-2893685.jpg&fm=jpg" />
      </div>
      <button id="left" onClick={() => temptation()}>
        dasdas
      </button>
      <button id="right">dsadsa</button>
    </div>
  );
}
