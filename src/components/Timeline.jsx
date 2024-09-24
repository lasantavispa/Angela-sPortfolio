import React from 'react';

const Timeline = () => {
    const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}

  return (
    <>
     <h3 id="timeline">Timeline</h3>

      <section className="timeline">
        <ol>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1934</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis praesentium
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1937</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  Proin quam velit, efficitur vel neque vitae, rhoncus commodo
                  mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex
                  augue, varius et pulvinar in, pretium non nisi.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1940</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  Proin iaculis, nibh eget efficitur varius, libero tellus porta
                  dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus
                  arcu, sit amet sollicitudin eros.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1943</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  In mattis elit vitae odio posuere, nec maximus massa varius.
                  Suspendisse varius volutpat mattis. Vestibulum id magna est.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1946</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  In mattis elit vitae odio posuere, nec maximus massa varius.
                  Suspendisse varius volutpat mattis. Vestibulum id magna est.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1956</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  Proin iaculis, nibh eget efficitur varius, libero tellus porta
                  dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus
                  arcu, sit amet sollicitudin eros
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1967</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  In mattis elit vitae odio posuere, nec maximus massa varius.
                  Suspendisse varius volutpat mattis. Vestibulum id magna est.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>1985</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  Proin iaculis, nibh eget efficitur varius, libero tellus porta
                  dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus
                  arcu, sit amet sollicitudin eros
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>2000</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  In mattis elit vitae odio posuere, nec maximus massa varius.
                  Suspendisse varius volutpat mattis. Vestibulum id magna est.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>2012</time>
              </div>
              <div className="details">
                <h3>Heading Here</h3>
                <p>
                  Proin iaculis, nibh eget efficitur varius, libero tellus porta
                  dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus
                  arcu, sit amet sollicitudin eros
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Timeline;
