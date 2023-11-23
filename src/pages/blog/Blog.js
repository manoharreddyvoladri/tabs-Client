import "./blog.css";
const ThankYou = () => {
return(
<section class="section-blogs" id="blogs">
  <div class="container">
    <span class="subheading">Latest News</span>
    <h2 class="heading-secondary heading-blogs">
      Check out our latest articles!
    </h2>

    <div class="blogs-container">
      <div class="blog">
        <figure class="blog-img">
          <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000057294472_Full.jpg" alt="Venice" />

        </figure>

        <div class="blog-content">
          <div class="blog-tags">
            <span class="tag tag--travel">Travel</span>
            <span class="tag tag--attractions">Attractions</span>
          </div>
          <a class="blog-heading" href="#">
            What makes Venice of the most visited places in Italy
          </a>
          <p class="blog-text">
            Venice is one of the most visited places in Italy. It is a
            beautiful city with a lot of history and culture. It is also
            known for its canals and bridges...
          </p>
          <a class="blog-link" href="#">Read more &rarr;</a>
        </div>
      </div>

      <div class="blog">
        <figure class="blog-img">
          <img src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/gettyimages-883940960_web.jpg?w=1600&h=900" alt="Plovdiv" />

        </figure>

        <div class="blog-content">
          <div class="blog-tags">
            <span class="tag tag--travel">Travel</span>
            <span class="tag tag--experience">experiences</span>
          </div>
          <a class="blog-heading" href="#">
            5 different experiences you may have in Plovdiv
          </a>
          <p class="blog-text">
            Plovdiv is an ancient city built around 7 hills, in southern
            Bulgaria. It is also the oldest city in Europe. It is known
            for its architecture and culture...
          </p>
          <a class="blog-link" href="#">Read more &rarr;</a>
        </div>
      </div>

      <div class="blog">
        <figure class="blog-img">
          <img src="https://thegapdecaders.com/wp-content/uploads/2020/10/FlorenceFI-1.jpg" alt="Florence" />

        </figure>

        <div class="blog-content">
          <div class="blog-tags">
            <span class="tag tag--travel">Travel</span>
            <span class="tag tag--places">places</span>
          </div>
          <a class="blog-heading" href="#">
            12 amazing places to visit and see in Florence.
          </a>
          <p class="blog-text">
            Florence, capital of Italy’s Tuscany region, is home to many
            masterpieces of Renaissance art and architecture. One of its
            most iconic sights...
          </p>
          <a class="blog-link" href="#">Read more &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>)}
export default ThankYou
      