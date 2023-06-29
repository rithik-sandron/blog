'use client';
export default function PostMetaData({ post, doNeedGist }) {
    return (
        <section key={post.slug} className={doNeedGist ? 'container' : 'sub-container'}>
            {doNeedGist ? <h1>{post.title}</h1> : <h3>{post.title}</h3>}
            {doNeedGist && <p>{post.gist}</p>}
            <span>
                <li>{post.list}</li>
                <li>{post.date}</li>
                {/* {doNeedGist && <hr />} */}
            </span>
            {/* {!doNeedGist && <hr />} */}
        </section>

    );
}