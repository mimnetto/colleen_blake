import React from 'react'
import fancy from '../img/fancy.png'

export default function Header(props) {
    return (
       <section className="hero is-primary is-medium">
            <div className="hero-body">
              <img src={fancy} className="is-pulled-right fancy" />
              <div className="container">
                <h1 className="title">
                  Welcome
                </h1>
                <h2 className="subtitle">
                  Medium subtitle
                </h2>
              </div>
            </div>
          </section>
        )
}
