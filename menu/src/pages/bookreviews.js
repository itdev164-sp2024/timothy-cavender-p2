import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BookReviews = ({data}) => {
    return (
        <Layout>
            <h1>Book Reviews</h1>
            <ul>
                {
                    data.allContentfulRmBookReviews.edges.map(edge => (
                        <li>
                            <h2>Title: {edge.node.title}</h2>
                            <h3>Author: {edge.node.author}</h3>
                            <h3>Rating: {edge.node.rating}/5</h3>
                            <h3>Reviewer: {edge.node.reviewer}</h3>
                            <p>Reviewer Tag: {edge.node.tags}</p>
                            <p>Review Date:{edge.node.reviewDate}</p>
                            <img src={edge.node.bookCover.file.url} />
                            <p>Review: {edge.node.review.review}</p>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default BookReviews

export const query = graphql `
{
  allContentfulRmBookReviews(sort: {reviewDate: DESC}) {
    edges {
      node {
        title
        author
        rating
        reviewer
        tags
        reviewDate(formatString: "MMMM Do, YYYY")
        bookCover {
          file {
            url
          }
        }
        review {
          review
        }
      }
    }
  }
}
`