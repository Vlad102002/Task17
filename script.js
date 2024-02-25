
const comments = [
  {
    id: 1,
    text: 'This is the first comment',
    parentId: null,
    replies: [
      {
        id: 2,
        text: 'This is a reply to the first comment',
        parentId: 1,
        replies: [
          {
            id: 3,
            text: 'This is a nested reply',
            parentId: 2,
            replies: [], 
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: 'This is an independent comment',
    parentId: null,
    replies: [],
  },

];


function genComment(comment, level) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.style.marginLeft = level * 20 + 'px'; 

  const commentText = document.createElement('p');
  commentText.textContent = comment.text;
  commentElement.appendChild(commentText);


  if (comment.replies.length > 0) {
    const repliesContainer = document.createElement('div');
    repliesContainer.classList.add('replies');
    comment.replies.forEach((reply) => {
      repliesContainer.appendChild(genComment(reply, level + 1));
    });
    commentElement.appendChild(repliesContainer);
  }

  return commentElement;
}

function appendComments(comments) {
  const container = document.getElementById('comments-container');
  comments.forEach((comment) => {
    if (comment.parentId === null) {
      container.appendChild(genComment(comment, 0));
    }
  });
}

appendComments(comments);
