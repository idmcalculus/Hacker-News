import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stories = [
      {
        id: '21606415',
        title: '1.2B people exposed in data leak includes personal info, LinkedIn, Facebook',
        url: 'https://www.dataviper.io/blog/2019/pdl-data-exposure-billion-people/',
        score: 624,
        descendants: 173,
        timeISO: '2019-11-22T15:31:22.000Z',
        by: {
          id: 'bencollier49'
        }
      },
      {
        id: '21607734',
        title: 'The revolution of machine learning has been greatly exaggerated',
        url: 'http://nautil.us/issue/78/atmospheres/are-neural-networks-about-to-reinvent-physics',
        score: 78,
        descendants: 29,
        timeISO: '2019-11-22T17:28:05.000Z',
        by: {
          id: 'benryon'
        }
      },
      {
        id: '21607712',
        title: 'Postwoman – a free, fast, and beautiful alternative to Postman',
        url: 'https://github.com/liyasthomas/postwoman',
        score: 93,
        descendants: 41,
        timeISO: '2019-11-22T17:26:44.000Z',
        by: {
          id: 'michaelsbradley'
        }
      },
      {
        id: '21598815',
        title: 'Google Kills Cloud Print',
        url: 'https://support.google.com/chrome/a/answer/9633006',
        score: 100,
        descendants: 383,
        timeISO: '2019-11-21T19:58:44.000Z',
        by: {
          id: 'ryandvm'
        }
      },
      {
        id: '21606221',
        title: 'Overview of Rust error handling libraries',
        url: 'https://blog.yoshuawuyts.com/error-handling-survey/',
        score: 105,
        descendants: 43,
        timeISO: '2019-11-22T15:12:41.000Z',
        by: {
          id: 'agluszak'
        }
      },
      {
        id: '21605643',
        title: 'The difference between an expert’s brain and a novice’s',
        url: 'https://www.cshl.edu/the-difference-between-an-experts-brain-and-a-novices/',
        score: 155,
        descendants: 40,
        timeISO: '2019-11-22T14:08:40.000Z',
        by: {
          id: 'known'
        }
      },
      {
        id: '21605470',
        title: 'Deepfakes: MIT brings Nixon\'s Apollo disaster speech to life',
        url: 'https://www.wbur.org/news/2019/11/22/mit-nixon-deep-fake',
        score: 135,
        descendants: 81,
        timeISO: '2019-11-22T13:47:14.000Z',
        by: {
          id: 'jbredeche'
        }
      },
      {
        id: '21608094',
        title: 'New Tricks for an Old Z-Machine, Part 3: A Renaissance Is Nigh',
        url: 'https://www.filfre.net/2019/11/new-tricks-for-an-old-z-machine-part-3-a-renaissance-is-nigh/',
        score: 11,
        descendants: 0,
        timeISO: '2019-11-22T17:58:00.000Z',
        by: {
          id: 'doppp'
        }
      },
      {
        id: '21601932',
        title: 'DeepMind\'s MuZero teaches itself how to win at Atari, chess, shogi, and Go',
        url: 'https://venturebeat.com/2019/11/20/deepminds-muzero-teaches-itself-how-to-win-at-atari-chess-shogi-and-go/',
        score: 41,
        descendants: 9,
        timeISO: '2019-11-22T02:32:18.000Z',
        by: {
          id: 'jonbaer'
        }
      },
      {
        id: '21607564',
        title: 'Google Translator Toolkit is shutting down',
        url: 'https://support.google.com/translatortoolkit/answer/9462068?hl=en',
        score: 21,
        descendants: 6,
        timeISO: '2019-11-22T17:12:45.000Z',
        by: {
          id: 'amq'
        }
      },
      {
        id: '21593498',
        title: 'Rust compiler bug test case reduction techniques',
        url: 'http://blog.pnkfx.org/blog/2019/11/18/rust-bug-minimization-patterns/',
        score: 44,
        descendants: 1,
        timeISO: '2019-11-21T12:43:04.000Z',
        by: {
          id: 'fanf2'
        }
      },
      {
        id: '21592970',
        title: 'Designing Windows 95\'s User Interface',
        url: 'https://socket3.wordpress.com/2018/02/03/designing-windows-95s-user-interface/',
        score: 161,
        descendants: 71,
        timeISO: '2019-11-21T10:52:54.000Z',
        by: {
          id: 'akling'
        }
      },
      {
        id: '21604544',
        title: 'We Tested 5 Popular Web Hosting Companies and All Were Easily Hacked',
        url: 'https://www.websiteplanet.com/blog/report-popular-hosting-hacked/',
        score: 120,
        descendants: 22,
        timeISO: '2019-11-22T11:07:15.000Z',
        by: {
          id: 'jcassee'
        }
      },
      {
        id: '21602437',
        title: 'Tesla Cybertruck',
        url: 'https://www.tesla.com/cybertruck',
        score: 1627,
        descendants: 1648,
        timeISO: '2019-11-22T04:30:23.000Z',
        by: {
          id: 'sahin-boydas'
        }
      },
      {
        id: '21608205',
        title: '‘We were sold off’: WeWork’s staff face uncertain future as company collapses',
        url: 'https://www.theguardian.com/business/2019/nov/22/we-were-sold-off-weworks-support-staff-face-uncertain-future-as-company-collapses',
        score: 40,
        descendants: 19,
        timeISO: '2019-11-22T18:09:10.000Z',
        by: {
          id: 'vanusa'
        }
      },
      {
        id: '21593257',
        title: 'Common Mistakes and Missed Optimization Opportunities in SQL',
        url: 'https://hakibenita.com/sql-dos-and-donts',
        score: 131,
        descendants: 56,
        timeISO: '2019-11-21T11:59:14.000Z',
        by: {
          id: 'haki'
        }
      },
      {
        id: '21593446',
        title: 'Neural Network on a Commodore 64 (1987)',
        url: 'http://www.fourmilab.ch/documents/commodore/BrainSim/',
        score: 18,
        descendants: 2,
        timeISO: '2019-11-21T12:33:17.000Z',
        by: {
          id: 'musha68k'
        }
      },
      {
        id: '21606642',
        title: 'Sacha Baron Cohen\'s Thoughts on Social Media and Tech Company Responsibilities',
        url: 'https://www.youtube.com/watch?v=ymaWq5yZIYM',
        score: 189,
        descendants: 109,
        timeISO: '2019-11-22T15:50:43.000Z',
        by: {
          id: 'ajg360'
        }
      },
      {
        id: '21606329',
        title: 'Scientists Confirm Water Vapor on Europa',
        url: 'http://www.nasa.gov/feature/goddard/2019/nasa-scientists-confirm-water-vapor-on-europa',
        score: 112,
        descendants: 19,
        timeISO: '2019-11-22T15:24:14.000Z',
        by: {
          id: 'l1n'
        }
      },
      {
        id: '21593147',
        title: 'Using SDRAM in FPGA Designs',
        url: 'https://www.joshbassett.info/sdram-controller/',
        score: 9,
        descendants: 1,
        timeISO: '2019-11-21T11:36:26.000Z',
        by: {
          id: 'nullobject'
        }
      },
      {
        id: '21604685',
        title: 'Mu: Sketching out a minimal system programming language',
        url: 'http://akkartik.name/post/mu-2019-2',
        score: 75,
        descendants: 12,
        timeISO: '2019-11-22T11:37:05.000Z',
        by: {
          id: 'signa11'
        }
      },
      {
        id: '21608320',
        title: 'Show HN: Wrapping Images Around Fractals',
        url: 'http://bamia.net/articles/fractals/index.html',
        score: 3,
        descendants: 1,
        timeISO: '2019-11-22T18:20:48.000Z',
        by: {
          id: 'bamia'
        }
      },
      {
        id: '21605165',
        title: 'Milled: A search engine for email newsletters',
        url: 'https://milled.com/',
        score: 40,
        descendants: 20,
        timeISO: '2019-11-22T13:04:19.000Z',
        by: {
          id: 'mrzool'
        }
      },
      {
        id: '21605190',
        title: 'Bee-Friendly Companies Are Getting the Science of the Crisis Completely Wrong',
        url: 'https://onezero.medium.com/bee-friendly-companies-are-getting-the-science-of-the-crisis-completely-wrong-c48055460337?source=rss----444d13b52878---4&gi=3d2b75823b0f',
        score: 36,
        descendants: 22,
        timeISO: '2019-11-22T13:07:20.000Z',
        by: {
          id: 'wixxy'
        }
      },
      {
        id: '21593602',
        title: 'Our home delivery habit reshaped the world',
        url: 'https://www.theguardian.com/technology/2019/nov/21/how-our-home-delivery-habit-reshaped-the-world',
        score: 28,
        descendants: 28,
        timeISO: '2019-11-21T13:03:38.000Z',
        by: {
          id: 'opaque'
        }
      },
      {
        id: '21605719',
        title: 'Cloudflare open-sources Flan Scan, a network vulnerability scanner',
        url: 'https://blog.cloudflare.com/introducing-flan-scan/',
        score: 121,
        descendants: 31,
        timeISO: '2019-11-22T14:19:12.000Z',
        by: {
          id: '0xmohit'
        }
      },
      {
        id: '21604710',
        title: 'The Danger of “Simplicity”',
        url: 'https://asthasr.github.io/posts/danger-of-simplicity',
        score: 223,
        descendants: 143,
        timeISO: '2019-11-22T11:41:31.000Z',
        by: {
          id: 'emrehan'
        }
      },
      {
        id: '21603483',
        title: 'Go’s Features of Last Resort',
        url: 'https://www.arp242.net/go-last-resort.html',
        score: 96,
        descendants: 42,
        timeISO: '2019-11-22T07:08:28.000Z',
        by: {
          id: 'kristianp'
        }
      },
      {
        id: '21607598',
        title: 'Sacha Baron Cohen: Facebook would have let Hitler buy ads for \'final solution\'',
        url: 'https://www.msn.com/en-gb/entertainment/movies/sacha-baron-cohen-facebook-would-have-let-hitler-buy-ads-for-final-solution/ar-BBXaK3S',
        score: 360,
        descendants: 157,
        timeISO: '2019-11-22T17:15:38.000Z',
        by: {
          id: 'yevster'
        }
      },
      {
        id: '21606154',
        title: 'Standard Cyborg is hiring back end engineers to work on computer vision tools',
        url: 'https://www.standardcyborg.com/careers/backend-engineer',
        score: 1,
        descendants: null,
        timeISO: '2019-11-22T15:06:20.000Z',
        by: {
          id: 'jeffchuber'
        }
      }
    ];
    return { stories };
  }
}
