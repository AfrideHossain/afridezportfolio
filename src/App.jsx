import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit
        nobis dolorem nemo unde repudiandae hic aliquam voluptate laborum, iste
        autem, voluptas, voluptatibus cupiditate nam? Accusamus quos expedita
        aliquam corporis quam, ex provident fugit odit autem animi, est,
        deserunt consectetur! Neque dolor corrupti inventore temporibus quidem
        earum? Harum necessitatibus molestiae veniam dolorem, debitis
        consequuntur quae vitae sint esse dignissimos quis sit. Eum rem culpa
        suscipit facere, mollitia corrupti illo. Quia, ullam delectus quas velit
        minima voluptas voluptate mollitia accusamus veritatis dolorum fugit
        saepe distinctio perferendis quam cupiditate illo sint voluptatum
        recusandae. Incidunt, porro aspernatur, consequatur doloremque harum
        quod delectus explicabo magni ut velit amet hic rerum quia ea sint! Unde
        corporis explicabo dignissimos aperiam ab dolore maxime id fugit
        cupiditate tempore ea iusto ratione eum incidunt, quidem cum, repellat,
        laboriosam doloribus sit nemo nam nulla. Deleniti praesentium quo nam
        velit, eligendi dolorum quaerat eveniet ad nostrum ullam adipisci
        blanditiis ipsum consequatur eos laudantium expedita ipsam voluptatum
        magnam, veniam earum! Optio provident inventore totam nostrum labore
        maxime amet id omnis sunt veniam debitis consectetur, maiores dolore
        porro, aliquam pariatur cupiditate eum ullam deleniti! Ratione saepe
        eaque ullam hic fugit error vel eos, voluptatum accusantium nam neque
        facere nisi tempore eveniet molestiae!
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit
        nobis dolorem nemo unde repudiandae hic aliquam voluptate laborum, iste
        autem, voluptas, voluptatibus cupiditate nam? Accusamus quos expedita
        aliquam corporis quam, ex provident fugit odit autem animi, est,
        deserunt consectetur! Neque dolor corrupti inventore temporibus quidem
        earum? Harum necessitatibus molestiae veniam dolorem, debitis
        consequuntur quae vitae sint esse dignissimos quis sit. Eum rem culpa
        suscipit facere, mollitia corrupti illo. Quia, ullam delectus quas velit
        minima voluptas voluptate mollitia accusamus veritatis dolorum fugit
        saepe distinctio perferendis quam cupiditate illo sint voluptatum
        recusandae. Incidunt, porro aspernatur, consequatur doloremque harum
        quod delectus explicabo magni ut velit amet hic rerum quia ea sint! Unde
        corporis explicabo dignissimos aperiam ab dolore maxime id fugit
        cupiditate tempore ea iusto ratione eum incidunt, quidem cum, repellat,
        laboriosam doloribus sit nemo nam nulla. Deleniti praesentium quo nam
        velit, eligendi dolorum quaerat eveniet ad nostrum ullam adipisci
        blanditiis ipsum consequatur eos laudantium expedita ipsam voluptatum
        magnam, veniam earum! Optio provident inventore totam nostrum labore
        maxime amet id omnis sunt veniam debitis consectetur, maiores dolore
        porro, aliquam pariatur cupiditate eum ullam deleniti! Ratione saepe
        eaque ullam hic fugit error vel eos, voluptatum accusantium nam neque
        facere nisi tempore eveniet molestiae!
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit
        nobis dolorem nemo unde repudiandae hic aliquam voluptate laborum, iste
        autem, voluptas, voluptatibus cupiditate nam? Accusamus quos expedita
        aliquam corporis quam, ex provident fugit odit autem animi, est,
        deserunt consectetur! Neque dolor corrupti inventore temporibus quidem
        earum? Harum necessitatibus molestiae veniam dolorem, debitis
        consequuntur quae vitae sint esse dignissimos quis sit. Eum rem culpa
        suscipit facere, mollitia corrupti illo. Quia, ullam delectus quas velit
        minima voluptas voluptate mollitia accusamus veritatis dolorum fugit
        saepe distinctio perferendis quam cupiditate illo sint voluptatum
        recusandae. Incidunt, porro aspernatur, consequatur doloremque harum
        quod delectus explicabo magni ut velit amet hic rerum quia ea sint! Unde
        corporis explicabo dignissimos aperiam ab dolore maxime id fugit
        cupiditate tempore ea iusto ratione eum incidunt, quidem cum, repellat,
        laboriosam doloribus sit nemo nam nulla. Deleniti praesentium quo nam
        velit, eligendi dolorum quaerat eveniet ad nostrum ullam adipisci
        blanditiis ipsum consequatur eos laudantium expedita ipsam voluptatum
        magnam, veniam earum! Optio provident inventore totam nostrum labore
        maxime amet id omnis sunt veniam debitis consectetur, maiores dolore
        porro, aliquam pariatur cupiditate eum ullam deleniti! Ratione saepe
        eaque ullam hic fugit error vel eos, voluptatum accusantium nam neque
        facere nisi tempore eveniet molestiae!
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit
        nobis dolorem nemo unde repudiandae hic aliquam voluptate laborum, iste
        autem, voluptas, voluptatibus cupiditate nam? Accusamus quos expedita
        aliquam corporis quam, ex provident fugit odit autem animi, est,
        deserunt consectetur! Neque dolor corrupti inventore temporibus quidem
        earum? Harum necessitatibus molestiae veniam dolorem, debitis
        consequuntur quae vitae sint esse dignissimos quis sit. Eum rem culpa
        suscipit facere, mollitia corrupti illo. Quia, ullam delectus quas velit
        minima voluptas voluptate mollitia accusamus veritatis dolorum fugit
        saepe distinctio perferendis quam cupiditate illo sint voluptatum
        recusandae. Incidunt, porro aspernatur, consequatur doloremque harum
        quod delectus explicabo magni ut velit amet hic rerum quia ea sint! Unde
        corporis explicabo dignissimos aperiam ab dolore maxime id fugit
        cupiditate tempore ea iusto ratione eum incidunt, quidem cum, repellat,
        laboriosam doloribus sit nemo nam nulla. Deleniti praesentium quo nam
        velit, eligendi dolorum quaerat eveniet ad nostrum ullam adipisci
        blanditiis ipsum consequatur eos laudantium expedita ipsam voluptatum
        magnam, veniam earum! Optio provident inventore totam nostrum labore
        maxime amet id omnis sunt veniam debitis consectetur, maiores dolore
        porro, aliquam pariatur cupiditate eum ullam deleniti! Ratione saepe
        eaque ullam hic fugit error vel eos, voluptatum accusantium nam neque
        facere nisi tempore eveniet molestiae!
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit
        nobis dolorem nemo unde repudiandae hic aliquam voluptate laborum, iste
        autem, voluptas, voluptatibus cupiditate nam? Accusamus quos expedita
        aliquam corporis quam, ex provident fugit odit autem animi, est,
        deserunt consectetur! Neque dolor corrupti inventore temporibus quidem
        earum? Harum necessitatibus molestiae veniam dolorem, debitis
        consequuntur quae vitae sint esse dignissimos quis sit. Eum rem culpa
        suscipit facere, mollitia corrupti illo. Quia, ullam delectus quas velit
        minima voluptas voluptate mollitia accusamus veritatis dolorum fugit
        saepe distinctio perferendis quam cupiditate illo sint voluptatum
        recusandae. Incidunt, porro aspernatur, consequatur doloremque harum
        quod delectus explicabo magni ut velit amet hic rerum quia ea sint! Unde
        corporis explicabo dignissimos aperiam ab dolore maxime id fugit
        cupiditate tempore ea iusto ratione eum incidunt, quidem cum, repellat,
        laboriosam doloribus sit nemo nam nulla. Deleniti praesentium quo nam
        velit, eligendi dolorum quaerat eveniet ad nostrum ullam adipisci
        blanditiis ipsum consequatur eos laudantium expedita ipsam voluptatum
        magnam, veniam earum! Optio provident inventore totam nostrum labore
        maxime amet id omnis sunt veniam debitis consectetur, maiores dolore
        porro, aliquam pariatur cupiditate eum ullam deleniti! Ratione saepe
        eaque ullam hic fugit error vel eos, voluptatum accusantium nam neque
        facere nisi tempore eveniet molestiae!
      </p>
    </>
  );
}

export default App;
