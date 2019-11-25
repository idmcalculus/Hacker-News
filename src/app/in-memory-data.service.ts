import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stories = [
      {
        id: '21618774',
        title: 'CUDA 10.2 is the last release to support macOS',
        url: 'https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html',
        score: 22,
        descendants: 10,
        time: 1574576664,
        timeISO: '2019-11-24T06:24:24.000Z',
        by: {
          id: 'sergiomattei'
        }
      },
      {
        id: '21618079',
        title: 'Hard Problems in Cryptocurrency: Five Years Later',
        url: 'https://vitalik.ca/general/2019/11/22/progress.html',
        score: 113,
        descendants: 63,
        time: 1574564592,
        timeISO: '2019-11-24T03:03:12.000Z',
        by: {
          id: 'feross'
        }
      },
      {
        id: '21618373',
        title: 'The Web Began Dying in 2014 (2017)',
        url: 'https://staltz.com/the-web-began-dying-in-2014-heres-how.html',
        score: 34,
        descendants: 8,
        time: 1574570141,
        timeISO: '2019-11-24T04:35:41.000Z',
        by: {
          id: 'pcr910303'
        }
      },
      {
        id: '21618083',
        title: 'Japanese hotel room costs $1 a night, but you have to livestream your stay',
        url: 'https://edition.cnn.com/travel/article/livestream-hotel-room-japan-intl-hnk/index.html',
        score: 59,
        descendants: 14,
        time: 1574564676,
        timeISO: '2019-11-24T03:04:36.000Z',
        by: {
          id: 'herendin2'
        }
      },
      {
        id: '21617016',
        title: 'Show HN: Hacker News Title Edit Tracker',
        url: 'https://hackernewstitles.netlify.com/',
        score: 237,
        descendants: 50,
        time: 1574547751,
        timeISO: '2019-11-23T22:22:31.000Z',
        by: {
          id: 'petercooper'
        }
      },
      {
        id: '21617643',
        title: 'Jslinux (2018)',
        url: 'https://bellard.org/jslinux/',
        score: 96,
        descendants: 14,
        time: 1574557020,
        timeISO: '2019-11-24T00:57:00.000Z',
        by: {
          id: 'pmoriarty'
        }
      },
      {
        id: '21613357',
        title: 'The Bus Ticket Theory of Genius',
        url: 'http://paulgraham.com/genius.html',
        score: 828,
        descendants: 395,
        time: 1574503593,
        timeISO: '2019-11-23T10:06:33.000Z',
        by: {
          id: 'pilingual'
        }
      },
      {
        id: '21616933',
        title: 'Suspect can’t be compelled to reveal “64-character” password, court rules',
        url: 'https://arstechnica.com/tech-policy/2019/11/police-cant-force-child-porn-suspect-to-reveal-his-password-court-rules/',
        score: 93,
        descendants: 45,
        time: 1574546902,
        timeISO: '2019-11-23T22:08:22.000Z',
        by: {
          id: 'sxp'
        }
      },
      {
        id: '21618346',
        title: 'Cryptoqueen: A woman scammed the world, then vanished',
        url: 'https://www.bbc.co.uk/news/stories-50435014',
        score: 14,
        descendants: 2,
        time: 1574569626,
        timeISO: '2019-11-24T04:27:06.000Z',
        by: {
          id: 'lnguyen'
        }
      },
      {
        id: '21604627',
        title: 'The Hidden Life of an Amazon User',
        url: 'https://www.janavirgin.com/AMZ/',
        score: 9,
        descendants: 0,
        time: 1574421786,
        timeISO: '2019-11-22T11:23:06.000Z',
        by: {
          id: 'rudenoise'
        }
      },
      {
        id: '21615924',
        title: 'An 84-year-old Japanese app developer',
        url: 'https://asia.nikkei.com/Business/Technology/Meet-the-84-year-old-Japanese-app-developer-who-inspired-Tim-Cook2',
        score: 190,
        descendants: 49,
        time: 1574536907,
        timeISO: '2019-11-23T19:21:47.000Z',
        by: {
          id: 'raleighm'
        }
      },
      {
        id: '21616084',
        title: 'X17 Particle',
        url: 'https://en.wikipedia.org/wiki/X17_particle',
        score: 126,
        descendants: 41,
        time: 1574538493,
        timeISO: '2019-11-23T19:48:13.000Z',
        by: {
          id: 'miobrien'
        }
      },
      {
        id: '21610207',
        title: 'Loving Latin at the End of the World',
        url: 'http://bostonreview.net/politics/joel-christensen-loving-latin-end-world',
        score: 12,
        descendants: 2,
        time: 1574457682,
        timeISO: '2019-11-22T21:21:22.000Z',
        by: {
          id: 'diodorus'
        }
      },
      {
        id: '21617836',
        title: 'YouTube channel owners: Is your content directed to children?',
        url: 'https://www.ftc.gov/news-events/blogs/business-blog/2019/11/youtube-channel-owners-your-content-directed-children',
        score: 58,
        descendants: 58,
        time: 1574560008,
        timeISO: '2019-11-24T01:46:48.000Z',
        by: {
          id: 'yskchu'
        }
      },
      {
        id: '21607818',
        title: 'Towards a unified theory of reactive UI',
        url: 'https://raphlinus.github.io/ui/druid/2019/11/22/reactive-ui.html',
        score: 78,
        descendants: 11,
        time: 1574444123,
        timeISO: '2019-11-22T17:35:23.000Z',
        by: {
          id: 'raphlinus'
        }
      },
      {
        id: '21603986',
        title: 'The care and feeding of software engineers, or why engineers are grumpy (2012)',
        url: 'https://humanwhocodes.com/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/',
        score: 222,
        descendants: 103,
        time: 1574413042,
        timeISO: '2019-11-22T08:57:22.000Z',
        by: {
          id: '1900jwatson'
        }
      },
      {
        id: '21615978',
        title: 'Diagram.codes',
        url: 'https://diagram.codes',
        score: 74,
        descendants: 17,
        time: 1574537587,
        timeISO: '2019-11-23T19:33:07.000Z',
        by: {
          id: 'hugozap'
        }
      },
      {
        id: '21598127',
        title: 'Exploiting prototype pollution',
        url: 'https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/',
        score: 17,
        descendants: 2,
        time: 1574363368,
        timeISO: '2019-11-21T19:09:28.000Z',
        by: {
          id: 'xtacy'
        }
      },
      {
        id: '21611677',
        title: 'Save .org',
        url: 'https://savedotorg.org/',
        score: 1884,
        descendants: 287,
        time: 1574470964,
        timeISO: '2019-11-23T01:02:44.000Z',
        by: {
          id: 'jaden'
        }
      },
      {
        id: '21616269',
        title: 'Interfaces Generally Belong with Users',
        url: 'http://neugierig.org/software/blog/2019/11/interface-pattern.html',
        score: 69,
        descendants: 23,
        time: 1574540359,
        timeISO: '2019-11-23T20:19:19.000Z',
        by: {
          id: 'kogir'
        }
      },
      {
        id: '21604825',
        title: 'Cname cloaking, a disguise of third-party trackers',
        url: 'https://medium.com/nextdns/cname-cloaking-the-dangerous-disguise-of-third-party-trackers-195205dc522a',
        score: 210,
        descendants: 143,
        time: 1574424370,
        timeISO: '2019-11-22T12:06:10.000Z',
        by: {
          id: 'nextdns'
        }
      },
      {
        id: '21604449',
        title: 'Music is universal and used in strikingly similar ways across the globe: study',
        url: 'https://www.newsweek.com/scientists-music-universal-globe-1473230',
        score: 101,
        descendants: 41,
        time: 1574419277,
        timeISO: '2019-11-22T10:41:17.000Z',
        by: {
          id: 'dr_dshiv'
        }
      },
      {
        id: '21615975',
        title: 'Amazon Go Cashierless Supermarkets, Pop-Up Stores Coming Soon',
        url: 'https://www.bloomberg.com/news/articles/2019-11-20/amazon-go-cashierless-supermarkets-pop-up-stores-coming-soon',
        score: 52,
        descendants: 111,
        time: 1574537559,
        timeISO: '2019-11-23T19:32:39.000Z',
        by: {
          id: 'joeyespo'
        }
      },
      {
        id: '21615393',
        title: 'Symbolic Maths in Python (2017)',
        url: 'https://alexandrugris.github.io/maths/2017/04/30/symbolic-maths-python.html',
        score: 62,
        descendants: 4,
        time: 1574531641,
        timeISO: '2019-11-23T17:54:01.000Z',
        by: {
          id: 'vyuh'
        }
      },
      {
        id: '21605037',
        title: 'A Junkyard Billionaire',
        url: 'https://www.bloomberg.com/news/articles/2019-11-19/junkyard-billionaire-thriving-on-car-wrecks-expands-his-empire',
        score: 36,
        descendants: 24,
        time: 1574426690,
        timeISO: '2019-11-22T12:44:50.000Z',
        by: {
          id: 'yarapavan'
        }
      },
      {
        id: '21614741',
        title: '100k+ page views a month for $5 with a self-hosted static site',
        url: 'https://runninginproduction.com/interviews/1-100k-page-views-a-month-for-5-dollars-with-a-self-hosted-static-site',
        score: 78,
        descendants: 31,
        time: 1574524968,
        timeISO: '2019-11-23T16:02:48.000Z',
        by: {
          id: 'nickjj'
        }
      },
      {
        id: '21618115',
        title: 'The rape of men: a dark secret of war (2011)',
        url: 'https://www.theguardian.com/society/2011/jul/17/the-rape-of-men',
        score: 112,
        descendants: 52,
        time: 1574565255,
        timeISO: '2019-11-24T03:14:15.000Z',
        by: {
          id: 'reedwolf'
        }
      },
      {
        id: '21593667',
        title: 'Positional Drum Notation [pdf]',
        url: 'http://stanford.edu/~mishel/CS448B/PositionalDrumNotation_Report.pdf',
        score: 27,
        descendants: 3,
        time: 1574342002,
        timeISO: '2019-11-21T13:13:22.000Z',
        by: {
          id: 'gield'
        }
      },
      {
        id: '21614533',
        title: 'Numba: a JIT compiler for Python that works best on code that uses NumPy',
        url: 'https://numba.pydata.org/numba-doc/dev/user/5minguide.html',
        score: 73,
        descendants: 9,
        time: 1574522451,
        timeISO: '2019-11-23T15:20:51.000Z',
        by: {
          id: 'reedwolf'
        }
      },
      {
        id: '21616463',
        title: 'What I have learned from my suicidal patients',
        url: 'https://www.theguardian.com/lifeandstyle/2019/nov/22/doctor-gp-what-i-have-learned-from-my-suicidal-patients',
        score: 105,
        descendants: 106,
        time: 1574542377,
        timeISO: '2019-11-23T20:52:57.000Z',
        by: {
          id: 'firstbase'
        }
      }
    ];
    return { stories };
  }
}
