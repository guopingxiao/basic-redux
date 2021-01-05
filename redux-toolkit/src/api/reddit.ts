export interface Post { 
  title: string;
}

export async function fetchPosts(subreddit: string) {
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  return fetch(`https://yapi.sankuai.com/mock/9442/backend/api/${subreddit}`)
    .then(response => response.json())
    .then(json => {
      return json.data.results.map((child: any) => ({ address: child.address }))
    });
}