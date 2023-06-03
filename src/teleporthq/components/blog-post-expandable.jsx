import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './blog-post-expandable.css'

const BlogPostExpandable = (props) => {
  return (
    <div
      className={`blog-post-expandable-blog-post-card ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-expandable-image"
      />
      <div className="blog-post-expandable-container">
        <div className="blog-post-expandable-container1">
          <span className="blog-post-expandable-text">{props.when}</span>
        </div>
        <div className="blog-post-expandable-container2">
          <span className="blog-post-expandable-text1">Read More -&gt;</span>
        </div>
        <span className="blog-post-expandable-text2">Read more</span>
        <div
          data-role="accordion-container"
          className="blog-post-expandable-element accordion-element"
        >
          <h1 className="blog-post-expandable-text3">{props.title}</h1>
          <span className="blog-post-expandable-text4">{props.label}</span>
          <div className="blog-post-expandable-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-expandable-image1"
            />
            <span className="blog-post-expandable-text5">{props.author}</span>
          </div>
          <div className="blog-post-expandable-details">
            <span
              data-role="accordion-content"
              className="blog-post-expandable-text6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Molestie a iaculis at erat pellentesque adipiscing commodo elit
              at. Non diam phasellus vestibulum lorem sed risus ultricies
              tristique. Etiam sit amet nisl purus. Ornare quam viverra orci
              sagittis eu.
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="blog-post-expandable-icon"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
  /*
  Accordion - Code Embed
  */

  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          accordionContents.forEach((accordionContent) => {
              accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIcons.forEach((accordionIcon) => {
              accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
      });
  });

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
          ></DangerousHTML>
        </div>
      </div>
    </div>
  )
}

BlogPostExpandable.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.   Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.   Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.   Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.   Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  author: 'Jane Doe',
  label: 'Tagline',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=400',
  title: 'Title',
  profile_alt: 'profile',
  rootClassName: '',
  image_alt: 'image',
  when: '3 days ago',
}

BlogPostExpandable.propTypes = {
  text: PropTypes.string,
  profile_src: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  when: PropTypes.string,
}

export default BlogPostExpandable
