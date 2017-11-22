import React, { Component } from 'react';
import EasyTransition from 'react-easy-transition';

import LogoMedium from './Logos/Medium';
import LogoAcrobat from './Logos/Acrobat';
import LogoSoundcloud from './Logos/Soundcloud';
import LogoYoutube from './Logos/Youtube';
import LogoWordpress from './Logos/Wordpress';
import LogoEbook from './Logos/Ebook';
import IconOnboarding from './Icons/Onboarding';
import IconNews from './Icons/News';
import IconBestPractices from './Icons/BestPractices';
import IconInspiration from './Icons/Inspiration';
import IconCourses from './Icons/Courses';
import IconStudy from './Icons/Study';
import IconSlack from './Icons/Slack';
import IconChrome from './Icons/Chrome';
import IconSafari from './Icons/Safari';
import IconFirefox from './Icons/Firefox';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <EasyTransition
        path={this.props.location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
      >
        <div className="wrapper home">
          <div className="header header-home u-relative">
            <div className="header-content">
              <div className="insight"><span>Create a culture of continuous learning</span></div>
              <div className="insight"><span>Build a searchable knowledge base</span></div>
              <div className="insight"><span>Set reading goals to work towards</span></div>
              <div className="insight"><span>Build a searchable knowledge base</span></div>
              <div className="insight"><span>Extend formal learning courses</span></div>
              <div className="insight"><span>Share articles, videos and audio</span></div>

              <div className="headlines u-padding-left-sm u-sm-padding-left-xl">
                <div className="headline">
                  <h1 className="t-face-title u-tmd u-xs-txl u-lg-txxl u-line-sm">
                    <span className="headline-title">Wise is a shared reading</span>
                    <span className="headline-sub">list for your team.</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="page page--narrow">
            <div className="page-content t-set">
              <div className="page-inner">
                <h3>Creating a shared reading list with your team shouldn't be hard &hellip;</h3>
                <img src="images/list-confused.svg" alt="Confused team sharing links" />
                <h4>&hellip; and with Wise, it isnt.</h4>
                <img src="images/list-ordered.svg" alt="Team organised sharing links" />
                <p>Wise helps you create shared reading lists for your team, so links are no longer lost in Slack, emails and text messages.</p>
                <p>Shared reading lists are made up of links added by you and your team members and are always available online and in a linked Slack channel.</p>
              </div>
            </div>
          </div>

          <div className="bump t-set">
            <h3>Wise will be your team's searchable knowledge base</h3>
            <p>Wise shared readings lists grow into a searchable knowledge base of useful, relevant content important to your team, from a variety of sources.</p>
          </div>

          <div className="cards cards--narrow">
            <div className="card card-xs">
              <div className="icon icon-wide"><LogoMedium /></div>
            </div>

            <div className="card card-xs">
              <div className="icon icon-wide"><LogoYoutube /></div>
            </div>

            <div className="card card-xs">
              <div className="icon icon-wide"><LogoSoundcloud /></div>
            </div>

            <div className="card card-xs">
              <div className="icon icon-wide"><LogoWordpress /></div>
            </div>

            <div className="card card-xs">
              <div className="icon icon-wide"><LogoAcrobat /></div>
            </div>

            <div className="card card-xs">
              <div className="icon icon-wide"><LogoEbook /></div>
            </div>
          </div>

          <div className="page">
            <div className="page-split">
              <div className="page-content t-set">
                <div className="page-inner">
                  <h3>Contribute, track and rate links in your lists</h3>
                  <p>Wise makes it easy for everyone on your team to contribute links and track their reading progress. By marking a link as read team members can easily stay on top of shared reading lists, filtering the list by unread items or revisiting links they’ve read previously.</p>
                  <p>Wise also lets team members rate links by upvoting, similar to what you find on services like Reddit, Hacker News and Product Hunt. By rating links you can learn what your team enjoy reading and content they agree with.</p>
                  <h5>Ready to create a shared reading list?</h5>
                  <p><a href="https://read.wiseapp.com/auth/slack" className="btn">Sign up with Slack</a></p>
                </div>
              </div>
              <div className="page-aside">
                <img src="images/list-screenshot.png" alt="Wise Shared Reading List" />
              </div>
            </div>
          </div>

          <div className="bump t-set">
            <h3>Multiple lists<br />for multiple uses</h3>
            <p>Wise makes it easy for you and your team to create and maintain multiple shared reading lists for different topics, projects and use cases.</p>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconOnboarding /></div>
                <h6>Onboarding</h6>
                <p>Ensure new employees know what's important to your company.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconNews /></div>
                <h6>News</h6>
                <p>Keep your team updated on news relevant to your industry.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconBestPractices /></div>
                <h6>Best Practices</h6>
                <p>Maintain a list of best practices for your field of expertise.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconInspiration /></div>
                <h6>Inspiration</h6>
                <p>Collect and discuss inspiration for a project.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconCourses /></div>
                <h6>Courses</h6>
                <p>Supplement course material.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-inner t-set">
                <div className="icon"><IconStudy /></div>
                <h6>Study</h6>
                <p>Maintain a list of links with your study group.</p>
              </div>
            </div>
          </div>

          <div className="bump t-set">
            <h3>Cross-platform support</h3>
            <p className="icon icon-md"><IconSlack /></p>
            <p>In addition to the web, Wise integrates with Slack so your team can easily add new links and be notified when a shared reading list is updated, you simply link a list to a channel and @wisebot will do the rest.</p>
          </div>

          <div className="cards">
            <div className="card card-xs card--disabled">
              <div className="icon"><IconChrome /></div>
              <p className="t-center">Coming Soon</p>
            </div>

            <div className="card card-xs card--disabled">
              <div className="icon"><IconSafari /></div>
              <p className="t-center">Coming Soon</p>
            </div>

            <div className="card card-xs card--disabled card-xs--widow">
              <div className="icon"><IconFirefox /></div>
              <p className="t-center">Coming Soon</p>
            </div>
          </div>

          <div className="bump bump-accompanying t-set">
            <p>The Wise browser extensions make it easy to add links while you're browsing.</p>
          </div>

          <div className="page">
            <div className="page-split">
              <div className="page-content t-set">
                <h3>Start your shared reading list</h3>
                <p>Get started with Wise today for free. By signing up with Slack you'll allow Wise to connect to your Slack account and create a #wise channel which will be your first reading list.</p>
                <p>You can add links directly from Slack and every new article added will be shared in your linked Slack channel.</p>

                <p><a href="https://read.wiseapp.com/auth/slack" className="btn">Sign up with Slack</a></p>

                <p><small>Don't use Slack? We'll be opening up Wise to all users soon.</small></p>
              </div>
              <div className="page-aside">
                <img src="images/wisebot-slack.png" alt="Slack Icon" />
              </div>
            </div>
          </div>
        </div>
      </EasyTransition>
    );
  }
}

export default Home;
