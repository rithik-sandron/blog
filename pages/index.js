import { getAllPosts } from '../lib/api'
import FeaturePost from '../components/FeaturePost'
import Layout from '../components/Layout';
// import Search from "../components/Search";
import Tip from '../components/Tips';
import Lists from '../components/Lists';


export default function Index({
  tipIndex = 0,
  blocks = [],
  list = [{
    'color': { bg: "", fore: "" },
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }]
}) {
  const heroPost = list[3][0];
  const tip = list[tipIndex][0];
  list = list.slice(0, tipIndex);

  // const [search, setSearch] = useState('');
  // const [f, setf] = useState([]);

  // useEffect(() => {
  //   if (search !== "") {
  //     const seachQuery = search.trim().toLowerCase();
  //     const allPosts = [...anime, ...news, ...movies];
  //     const res = allPosts.filter(x => {
  //       return (x.title.toLowerCase().includes(seachQuery) ||
  //         x.date.toLowerCase().includes(seachQuery) ||
  //         x.author.name.toLowerCase().includes(seachQuery)
  //         // x.tagsWithColors.filter(y => y.tag.toLowerCase().includes(seachQuery)).length > 0
  //       )
  //     })

  //     setf(res)
  //   }
  // }, [search])

  return (
    <Layout>
      <Tip post={tip} title='quick tip' />
      <FeaturePost post={heroPost} />

      {/* <Search search={search} setSearch={setSearch} /> */}
      {/* {(search !== "" && f.length === 0) && <div style={{ width: '90%', margin: '0 auto', padding: '1em 3.4em' }}>No posts found for your search</div>} */}
      {/* <ContentList posts={search !== "" ? f : morePosts} search={search} /> */}

      <Lists list={list} blocks={blocks} />
    </Layout>
  )
}

export const getStaticProps = async () => {

  const list = getAllPosts([
    'title',
    'author',
    'list',
    'date',
    'slug',
    // 'coverImage',
    'content',
    'color',
  ])

  function getRandomArb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let blocks = []

  for (let i = 0; i < 17; i++) {
    blocks.push(`b${getRandomArb(0, 16)}`);
  }

  return {
    props: { list: list.list, tipIndex: list.tipIndex, blocks: blocks }
  }
}
