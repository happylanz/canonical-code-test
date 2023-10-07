import moment from "moment";
import { IPost } from "../App.interface";
import { ICard } from "../Card/Card.interface";
import Term from "../constants/term";

const POST_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

const mapPosts = (posts: Array<IPost>): Array<ICard> => {
  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title.rendered,
      header:
        post._embedded["wp:term"]?.[Term.GROUP]
          ?.filter((term) => post.group.includes(term.id))
          .map((term) => term.name)
          .join(", ")
          ?.toUpperCase() || "NOT GROUPED",
      featuredImg: post.featured_media,
      featuredAlt: post.slug,
      author: post._embedded.author.find((item) => item.id === post.author),
      link: post.link,
      categories:
        post._embedded["wp:term"]?.[Term.CATEGORY]
          ?.filter((term) => post.categories.includes(term.id))
          .map((term) => term.name)
          .join(",") ?? "Uncategorized",
      createdDate: moment(post.date).format("DD MMM yyyy"),
    };
  });
};

const fetchPosts = (): Promise<Array<ICard>> => {
  return fetch(POST_URL)
    .then((response) => response.json())
    .then(mapPosts)
    .catch((error) => {
      console.error("Error fetching posts:", error);
      throw error;
    });
};

export { fetchPosts, mapPosts };
