import {Component} from 'react'
import RepoCard from '../RepoCard'
import './index.css'

const {items} = {
  items: [
    {
      id: 162807239,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjI4MDcyMzk=',
      name: 'yoga2',
      full_name: 'prisma-labs/yoga2',
      private: false,
      owner: {
        login: 'prisma-labs',
        id: 55085183,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjU1MDg1MTgz',
        avatar_url: 'https://avatars.githubusercontent.com/u/55085183?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/prisma-labs',
        html_url: 'https://github.com/prisma-labs',
        followers_url: 'https://api.github.com/users/prisma-labs/followers',
        following_url:
          'https://api.github.com/users/prisma-labs/following{/other_user}',
        gists_url: 'https://api.github.com/users/prisma-labs/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/prisma-labs/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/prisma-labs/subscriptions',
        organizations_url: 'https://api.github.com/users/prisma-labs/orgs',
        repos_url: 'https://api.github.com/users/prisma-labs/repos',
        events_url: 'https://api.github.com/users/prisma-labs/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/prisma-labs/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/prisma-labs/yoga2',
      description: " A lightweight 'Ruby on Rails'-like framework for GraphQL",
      fork: false,
      url: 'https://api.github.com/repos/prisma-labs/yoga2',
      forks_url: 'https://api.github.com/repos/prisma-labs/yoga2/forks',
      keys_url: 'https://api.github.com/repos/prisma-labs/yoga2/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/prisma-labs/yoga2/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/prisma-labs/yoga2/teams',
      hooks_url: 'https://api.github.com/repos/prisma-labs/yoga2/hooks',
      issue_events_url:
        'https://api.github.com/repos/prisma-labs/yoga2/issues/events{/number}',
      events_url: 'https://api.github.com/repos/prisma-labs/yoga2/events',
      assignees_url:
        'https://api.github.com/repos/prisma-labs/yoga2/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/prisma-labs/yoga2/branches{/branch}',
      tags_url: 'https://api.github.com/repos/prisma-labs/yoga2/tags',
      blobs_url:
        'https://api.github.com/repos/prisma-labs/yoga2/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/prisma-labs/yoga2/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/prisma-labs/yoga2/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/prisma-labs/yoga2/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/prisma-labs/yoga2/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/prisma-labs/yoga2/languages',
      stargazers_url:
        'https://api.github.com/repos/prisma-labs/yoga2/stargazers',
      contributors_url:
        'https://api.github.com/repos/prisma-labs/yoga2/contributors',
      subscribers_url:
        'https://api.github.com/repos/prisma-labs/yoga2/subscribers',
      subscription_url:
        'https://api.github.com/repos/prisma-labs/yoga2/subscription',
      commits_url:
        'https://api.github.com/repos/prisma-labs/yoga2/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/prisma-labs/yoga2/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/prisma-labs/yoga2/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/prisma-labs/yoga2/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/prisma-labs/yoga2/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/prisma-labs/yoga2/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/prisma-labs/yoga2/merges',
      archive_url:
        'https://api.github.com/repos/prisma-labs/yoga2/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/prisma-labs/yoga2/downloads',
      issues_url:
        'https://api.github.com/repos/prisma-labs/yoga2/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/prisma-labs/yoga2/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/prisma-labs/yoga2/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/prisma-labs/yoga2/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/prisma-labs/yoga2/labels{/name}',
      releases_url:
        'https://api.github.com/repos/prisma-labs/yoga2/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/prisma-labs/yoga2/deployments',
      created_at: '2018-12-22T11:54:57Z',
      updated_at: '2023-01-28T13:32:43Z',
      pushed_at: '2020-07-27T10:51:11Z',
      git_url: 'git://github.com/prisma-labs/yoga2.git',
      ssh_url: 'git@github.com:prisma-labs/yoga2.git',
      clone_url: 'https://github.com/prisma-labs/yoga2.git',
      svn_url: 'https://github.com/prisma-labs/yoga2',
      homepage: 'https://www.graphql.yoga',
      size: 707,
      stargazers_count: 349,
      watchers_count: 349,
      language: 'TypeScript',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 16,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 54,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 16,
      open_issues: 54,
      watchers: 349,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 114062924,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTQwNjI5MjQ=',
      name: 'unet_keras',
      full_name: 'HLearning/unet_keras',
      private: false,
      owner: {
        login: 'HLearning',
        id: 11738124,
        node_id: 'MDQ6VXNlcjExNzM4MTI0',
        avatar_url: 'https://avatars.githubusercontent.com/u/11738124?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/HLearning',
        html_url: 'https://github.com/HLearning',
        followers_url: 'https://api.github.com/users/HLearning/followers',
        following_url:
          'https://api.github.com/users/HLearning/following{/other_user}',
        gists_url: 'https://api.github.com/users/HLearning/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/HLearning/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/HLearning/subscriptions',
        organizations_url: 'https://api.github.com/users/HLearning/orgs',
        repos_url: 'https://api.github.com/users/HLearning/repos',
        events_url: 'https://api.github.com/users/HLearning/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/HLearning/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/HLearning/unet_keras',
      description: 'unet_keras use image Semantic segmentation',
      fork: false,
      url: 'https://api.github.com/repos/HLearning/unet_keras',
      forks_url: 'https://api.github.com/repos/HLearning/unet_keras/forks',
      keys_url:
        'https://api.github.com/repos/HLearning/unet_keras/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/HLearning/unet_keras/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/HLearning/unet_keras/teams',
      hooks_url: 'https://api.github.com/repos/HLearning/unet_keras/hooks',
      issue_events_url:
        'https://api.github.com/repos/HLearning/unet_keras/issues/events{/number}',
      events_url: 'https://api.github.com/repos/HLearning/unet_keras/events',
      assignees_url:
        'https://api.github.com/repos/HLearning/unet_keras/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/HLearning/unet_keras/branches{/branch}',
      tags_url: 'https://api.github.com/repos/HLearning/unet_keras/tags',
      blobs_url:
        'https://api.github.com/repos/HLearning/unet_keras/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/HLearning/unet_keras/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/HLearning/unet_keras/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/HLearning/unet_keras/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/HLearning/unet_keras/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/HLearning/unet_keras/languages',
      stargazers_url:
        'https://api.github.com/repos/HLearning/unet_keras/stargazers',
      contributors_url:
        'https://api.github.com/repos/HLearning/unet_keras/contributors',
      subscribers_url:
        'https://api.github.com/repos/HLearning/unet_keras/subscribers',
      subscription_url:
        'https://api.github.com/repos/HLearning/unet_keras/subscription',
      commits_url:
        'https://api.github.com/repos/HLearning/unet_keras/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/HLearning/unet_keras/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/HLearning/unet_keras/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/HLearning/unet_keras/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/HLearning/unet_keras/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/HLearning/unet_keras/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/HLearning/unet_keras/merges',
      archive_url:
        'https://api.github.com/repos/HLearning/unet_keras/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/HLearning/unet_keras/downloads',
      issues_url:
        'https://api.github.com/repos/HLearning/unet_keras/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/HLearning/unet_keras/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/HLearning/unet_keras/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/HLearning/unet_keras/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/HLearning/unet_keras/labels{/name}',
      releases_url:
        'https://api.github.com/repos/HLearning/unet_keras/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/HLearning/unet_keras/deployments',
      created_at: '2017-12-13T02:23:08Z',
      updated_at: '2022-10-31T11:28:43Z',
      pushed_at: '2018-07-17T05:39:13Z',
      git_url: 'git://github.com/HLearning/unet_keras.git',
      ssh_url: 'git@github.com:HLearning/unet_keras.git',
      clone_url: 'https://github.com/HLearning/unet_keras.git',
      svn_url: 'https://github.com/HLearning/unet_keras',
      homepage: '',
      size: 30979,
      stargazers_count: 315,
      watchers_count: 315,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 28,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 7,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['keras', 'unet'],
      visibility: 'public',
      forks: 28,
      open_issues: 7,
      watchers: 315,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 187824849,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODc4MjQ4NDk=',
      name: 'XCTAssertAutolayout',
      full_name: 'tarunon/XCTAssertAutolayout',
      private: false,
      owner: {
        login: 'tarunon',
        id: 1830205,
        node_id: 'MDQ6VXNlcjE4MzAyMDU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1830205?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tarunon',
        html_url: 'https://github.com/tarunon',
        followers_url: 'https://api.github.com/users/tarunon/followers',
        following_url:
          'https://api.github.com/users/tarunon/following{/other_user}',
        gists_url: 'https://api.github.com/users/tarunon/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tarunon/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/tarunon/subscriptions',
        organizations_url: 'https://api.github.com/users/tarunon/orgs',
        repos_url: 'https://api.github.com/users/tarunon/repos',
        events_url: 'https://api.github.com/users/tarunon/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tarunon/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/tarunon/XCTAssertAutolayout',
      description:
        'Provides assert function that check autolayout error in Swift',
      fork: false,
      url: 'https://api.github.com/repos/tarunon/XCTAssertAutolayout',
      forks_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/forks',
      keys_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/teams',
      hooks_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/hooks',
      issue_events_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/events',
      assignees_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/branches{/branch}',
      tags_url: 'https://api.github.com/repos/tarunon/XCTAssertAutolayout/tags',
      blobs_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/languages',
      stargazers_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/stargazers',
      contributors_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/contributors',
      subscribers_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/subscribers',
      subscription_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/subscription',
      commits_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/merges',
      archive_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/downloads',
      issues_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tarunon/XCTAssertAutolayout/deployments',
      created_at: '2019-05-21T11:36:09Z',
      updated_at: '2022-05-11T13:01:09Z',
      pushed_at: '2021-07-17T07:08:10Z',
      git_url: 'git://github.com/tarunon/XCTAssertAutolayout.git',
      ssh_url: 'git@github.com:tarunon/XCTAssertAutolayout.git',
      clone_url: 'https://github.com/tarunon/XCTAssertAutolayout.git',
      svn_url: 'https://github.com/tarunon/XCTAssertAutolayout',
      homepage: null,
      size: 351,
      stargazers_count: 303,
      watchers_count: 303,
      language: 'Swift',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 8,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 8,
      open_issues: 0,
      watchers: 303,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 178812690,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzg4MTI2OTA=',
      name: 'useJquery',
      full_name: 'latviancoder/useJquery',
      private: false,
      owner: {
        login: 'latviancoder',
        id: 3055171,
        node_id: 'MDQ6VXNlcjMwNTUxNzE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/3055171?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/latviancoder',
        html_url: 'https://github.com/latviancoder',
        followers_url: 'https://api.github.com/users/latviancoder/followers',
        following_url:
          'https://api.github.com/users/latviancoder/following{/other_user}',
        gists_url: 'https://api.github.com/users/latviancoder/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/latviancoder/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/latviancoder/subscriptions',
        organizations_url: 'https://api.github.com/users/latviancoder/orgs',
        repos_url: 'https://api.github.com/users/latviancoder/repos',
        events_url:
          'https://api.github.com/users/latviancoder/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/latviancoder/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/latviancoder/useJquery',
      description: 'An essential hook for your React applications.',
      fork: false,
      url: 'https://api.github.com/repos/latviancoder/useJquery',
      forks_url: 'https://api.github.com/repos/latviancoder/useJquery/forks',
      keys_url:
        'https://api.github.com/repos/latviancoder/useJquery/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/latviancoder/useJquery/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/latviancoder/useJquery/teams',
      hooks_url: 'https://api.github.com/repos/latviancoder/useJquery/hooks',
      issue_events_url:
        'https://api.github.com/repos/latviancoder/useJquery/issues/events{/number}',
      events_url: 'https://api.github.com/repos/latviancoder/useJquery/events',
      assignees_url:
        'https://api.github.com/repos/latviancoder/useJquery/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/latviancoder/useJquery/branches{/branch}',
      tags_url: 'https://api.github.com/repos/latviancoder/useJquery/tags',
      blobs_url:
        'https://api.github.com/repos/latviancoder/useJquery/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/latviancoder/useJquery/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/latviancoder/useJquery/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/latviancoder/useJquery/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/latviancoder/useJquery/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/latviancoder/useJquery/languages',
      stargazers_url:
        'https://api.github.com/repos/latviancoder/useJquery/stargazers',
      contributors_url:
        'https://api.github.com/repos/latviancoder/useJquery/contributors',
      subscribers_url:
        'https://api.github.com/repos/latviancoder/useJquery/subscribers',
      subscription_url:
        'https://api.github.com/repos/latviancoder/useJquery/subscription',
      commits_url:
        'https://api.github.com/repos/latviancoder/useJquery/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/latviancoder/useJquery/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/latviancoder/useJquery/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/latviancoder/useJquery/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/latviancoder/useJquery/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/latviancoder/useJquery/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/latviancoder/useJquery/merges',
      archive_url:
        'https://api.github.com/repos/latviancoder/useJquery/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/latviancoder/useJquery/downloads',
      issues_url:
        'https://api.github.com/repos/latviancoder/useJquery/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/latviancoder/useJquery/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/latviancoder/useJquery/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/latviancoder/useJquery/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/latviancoder/useJquery/labels{/name}',
      releases_url:
        'https://api.github.com/repos/latviancoder/useJquery/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/latviancoder/useJquery/deployments',
      created_at: '2019-04-01T07:51:50Z',
      updated_at: '2023-01-28T06:55:57Z',
      pushed_at: '2019-04-01T15:15:48Z',
      git_url: 'git://github.com/latviancoder/useJquery.git',
      ssh_url: 'git@github.com:latviancoder/useJquery.git',
      clone_url: 'https://github.com/latviancoder/useJquery.git',
      svn_url: 'https://github.com/latviancoder/useJquery',
      homepage: '',
      size: 6,
      stargazers_count: 303,
      watchers_count: 303,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 4,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 5,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 4,
      open_issues: 5,
      watchers: 303,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 121012488,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjEwMTI0ODg=',
      name: 'nml',
      full_name: 'dcloudio/nml',
      private: false,
      owner: {
        login: 'dcloudio',
        id: 5485517,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjU0ODU1MTc=',
        avatar_url: 'https://avatars.githubusercontent.com/u/5485517?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dcloudio',
        html_url: 'https://github.com/dcloudio',
        followers_url: 'https://api.github.com/users/dcloudio/followers',
        following_url:
          'https://api.github.com/users/dcloudio/following{/other_user}',
        gists_url: 'https://api.github.com/users/dcloudio/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/dcloudio/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/dcloudio/subscriptions',
        organizations_url: 'https://api.github.com/users/dcloudio/orgs',
        repos_url: 'https://api.github.com/users/dcloudio/repos',
        events_url: 'https://api.github.com/users/dcloudio/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/dcloudio/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/dcloudio/nml',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/dcloudio/nml',
      forks_url: 'https://api.github.com/repos/dcloudio/nml/forks',
      keys_url: 'https://api.github.com/repos/dcloudio/nml/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/dcloudio/nml/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/dcloudio/nml/teams',
      hooks_url: 'https://api.github.com/repos/dcloudio/nml/hooks',
      issue_events_url:
        'https://api.github.com/repos/dcloudio/nml/issues/events{/number}',
      events_url: 'https://api.github.com/repos/dcloudio/nml/events',
      assignees_url:
        'https://api.github.com/repos/dcloudio/nml/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/dcloudio/nml/branches{/branch}',
      tags_url: 'https://api.github.com/repos/dcloudio/nml/tags',
      blobs_url: 'https://api.github.com/repos/dcloudio/nml/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/dcloudio/nml/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/dcloudio/nml/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/dcloudio/nml/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/dcloudio/nml/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/dcloudio/nml/languages',
      stargazers_url: 'https://api.github.com/repos/dcloudio/nml/stargazers',
      contributors_url:
        'https://api.github.com/repos/dcloudio/nml/contributors',
      subscribers_url: 'https://api.github.com/repos/dcloudio/nml/subscribers',
      subscription_url:
        'https://api.github.com/repos/dcloudio/nml/subscription',
      commits_url: 'https://api.github.com/repos/dcloudio/nml/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/dcloudio/nml/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/dcloudio/nml/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/dcloudio/nml/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/dcloudio/nml/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/dcloudio/nml/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/dcloudio/nml/merges',
      archive_url:
        'https://api.github.com/repos/dcloudio/nml/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/dcloudio/nml/downloads',
      issues_url: 'https://api.github.com/repos/dcloudio/nml/issues{/number}',
      pulls_url: 'https://api.github.com/repos/dcloudio/nml/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/dcloudio/nml/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/dcloudio/nml/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/dcloudio/nml/labels{/name}',
      releases_url: 'https://api.github.com/repos/dcloudio/nml/releases{/id}',
      deployments_url: 'https://api.github.com/repos/dcloudio/nml/deployments',
      created_at: '2018-02-10T12:13:03Z',
      updated_at: '2022-12-05T19:08:04Z',
      pushed_at: '2018-07-13T08:45:06Z',
      git_url: 'git://github.com/dcloudio/nml.git',
      ssh_url: 'git@github.com:dcloudio/nml.git',
      clone_url: 'https://github.com/dcloudio/nml.git',
      svn_url: 'https://github.com/dcloudio/nml',
      homepage: 'https://dcloudio.github.io/nml/',
      size: 2488,
      stargazers_count: 281,
      watchers_count: 281,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 34,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 28,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 34,
      open_issues: 28,
      watchers: 281,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 181301906,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODEzMDE5MDY=',
      name: 'eslint-plugin-clean-regex',
      full_name: 'RunDevelopment/eslint-plugin-clean-regex',
      private: false,
      owner: {
        login: 'RunDevelopment',
        id: 20878432,
        node_id: 'MDQ6VXNlcjIwODc4NDMy',
        avatar_url: 'https://avatars.githubusercontent.com/u/20878432?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/RunDevelopment',
        html_url: 'https://github.com/RunDevelopment',
        followers_url: 'https://api.github.com/users/RunDevelopment/followers',
        following_url:
          'https://api.github.com/users/RunDevelopment/following{/other_user}',
        gists_url:
          'https://api.github.com/users/RunDevelopment/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/RunDevelopment/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/RunDevelopment/subscriptions',
        organizations_url: 'https://api.github.com/users/RunDevelopment/orgs',
        repos_url: 'https://api.github.com/users/RunDevelopment/repos',
        events_url:
          'https://api.github.com/users/RunDevelopment/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/RunDevelopment/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/RunDevelopment/eslint-plugin-clean-regex',
      description: 'An ESLint plugin for writing better regular expressions.',
      fork: false,
      // url: 'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex',
      forks_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/forks',
      keys_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/teams',
      hooks_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/hooks',
      issue_events_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/events',
      assignees_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/tags',
      blobs_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/languages',
      stargazers_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/stargazers',
      contributors_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/contributors',
      subscribers_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/subscribers',
      subscription_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/subscription',
      commits_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/merges',
      archive_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/downloads',
      issues_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/labels{/name}',
      releases_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/RunDevelopment/eslint-plugin-clean-regex/deployments',
      created_at: '2019-04-14T11:56:21Z',
      updated_at: '2023-01-28T06:02:04Z',
      pushed_at: '2021-10-11T12:51:37Z',
      git_url: 'git://github.com/RunDevelopment/eslint-plugin-clean-regex.git',
      ssh_url: 'git@github.com:RunDevelopment/eslint-plugin-clean-regex.git',
      clone_url:
        'https://github.com/RunDevelopment/eslint-plugin-clean-regex.git',
      svn_url: 'https://github.com/RunDevelopment/eslint-plugin-clean-regex',
      homepage: null,
      size: 1430,
      stargazers_count: 274,
      watchers_count: 274,
      language: 'TypeScript',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 2,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['eslint-plugin', 'regexp'],
      visibility: 'public',
      forks: 2,
      open_issues: 0,
      watchers: 274,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 136438535,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzY0Mzg1MzU=',
      name: 'mogo-h5plus',
      full_name: 'tyaqing/mogo-h5plus',
      private: false,
      owner: {
        login: 'tyaqing',
        id: 11229306,
        node_id: 'MDQ6VXNlcjExMjI5MzA2',
        avatar_url: 'https://avatars.githubusercontent.com/u/11229306?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tyaqing',
        html_url: 'https://github.com/tyaqing',
        followers_url: 'https://api.github.com/users/tyaqing/followers',
        following_url:
          'https://api.github.com/users/tyaqing/following{/other_user}',
        gists_url: 'https://api.github.com/users/tyaqing/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tyaqing/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/tyaqing/subscriptions',
        organizations_url: 'https://api.github.com/users/tyaqing/orgs',
        repos_url: 'https://api.github.com/users/tyaqing/repos',
        events_url: 'https://api.github.com/users/tyaqing/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tyaqing/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/tyaqing/mogo-h5plus',
      description: '多页面vue脚手架, 结合Hbuilder使用,可以快速开发 App',
      fork: false,
      url: 'https://api.github.com/repos/tyaqing/mogo-h5plus',
      forks_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/forks',
      keys_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/teams',
      hooks_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/hooks',
      issue_events_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/issues/events{/number}',
      events_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/events',
      assignees_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/branches{/branch}',
      tags_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/tags',
      blobs_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/languages',
      stargazers_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/stargazers',
      contributors_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/contributors',
      subscribers_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/subscribers',
      subscription_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/subscription',
      commits_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/tyaqing/mogo-h5plus/merges',
      archive_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/downloads',
      issues_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tyaqing/mogo-h5plus/deployments',
      created_at: '2018-06-07T07:24:28Z',
      updated_at: '2023-02-22T02:02:06Z',
      pushed_at: '2023-03-04T01:27:37Z',
      git_url: 'git://github.com/tyaqing/mogo-h5plus.git',
      ssh_url: 'git@github.com:tyaqing/mogo-h5plus.git',
      clone_url: 'https://github.com/tyaqing/mogo-h5plus.git',
      svn_url: 'https://github.com/tyaqing/mogo-h5plus',
      homepage: 'https://tyaqing.github.io/mogo-h5plus/',
      size: 7560,
      stargazers_count: 264,
      watchers_count: 264,
      language: 'CSS',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: true,
      forks_count: 63,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 15,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 63,
      open_issues: 15,
      watchers: 264,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 165308467,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjUzMDg0Njc=',
      name: 'suggest_rb',
      full_name: 'jbodah/suggest_rb',
      private: false,
      owner: {
        login: 'jbodah',
        id: 6093002,
        node_id: 'MDQ6VXNlcjYwOTMwMDI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/6093002?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jbodah',
        html_url: 'https://github.com/jbodah',
        followers_url: 'https://api.github.com/users/jbodah/followers',
        following_url:
          'https://api.github.com/users/jbodah/following{/other_user}',
        gists_url: 'https://api.github.com/users/jbodah/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jbodah/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jbodah/subscriptions',
        organizations_url: 'https://api.github.com/users/jbodah/orgs',
        repos_url: 'https://api.github.com/users/jbodah/repos',
        events_url: 'https://api.github.com/users/jbodah/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jbodah/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/jbodah/suggest_rb',
      description:
        ':question: tells you which method does the thing you want to do',
      fork: false,
      url: 'https://api.github.com/repos/jbodah/suggest_rb',
      forks_url: 'https://api.github.com/repos/jbodah/suggest_rb/forks',
      keys_url: 'https://api.github.com/repos/jbodah/suggest_rb/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jbodah/suggest_rb/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/jbodah/suggest_rb/teams',
      hooks_url: 'https://api.github.com/repos/jbodah/suggest_rb/hooks',
      issue_events_url:
        'https://api.github.com/repos/jbodah/suggest_rb/issues/events{/number}',
      events_url: 'https://api.github.com/repos/jbodah/suggest_rb/events',
      assignees_url:
        'https://api.github.com/repos/jbodah/suggest_rb/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jbodah/suggest_rb/branches{/branch}',
      tags_url: 'https://api.github.com/repos/jbodah/suggest_rb/tags',
      blobs_url:
        'https://api.github.com/repos/jbodah/suggest_rb/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jbodah/suggest_rb/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jbodah/suggest_rb/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jbodah/suggest_rb/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jbodah/suggest_rb/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/jbodah/suggest_rb/languages',
      stargazers_url:
        'https://api.github.com/repos/jbodah/suggest_rb/stargazers',
      contributors_url:
        'https://api.github.com/repos/jbodah/suggest_rb/contributors',
      subscribers_url:
        'https://api.github.com/repos/jbodah/suggest_rb/subscribers',
      subscription_url:
        'https://api.github.com/repos/jbodah/suggest_rb/subscription',
      commits_url:
        'https://api.github.com/repos/jbodah/suggest_rb/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jbodah/suggest_rb/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jbodah/suggest_rb/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jbodah/suggest_rb/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jbodah/suggest_rb/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jbodah/suggest_rb/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/jbodah/suggest_rb/merges',
      archive_url:
        'https://api.github.com/repos/jbodah/suggest_rb/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/jbodah/suggest_rb/downloads',
      issues_url:
        'https://api.github.com/repos/jbodah/suggest_rb/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jbodah/suggest_rb/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jbodah/suggest_rb/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jbodah/suggest_rb/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jbodah/suggest_rb/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jbodah/suggest_rb/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jbodah/suggest_rb/deployments',
      created_at: '2019-01-11T20:55:40Z',
      updated_at: '2023-01-08T03:03:53Z',
      pushed_at: '2019-04-29T20:11:34Z',
      git_url: 'git://github.com/jbodah/suggest_rb.git',
      ssh_url: 'git@github.com:jbodah/suggest_rb.git',
      clone_url: 'https://github.com/jbodah/suggest_rb.git',
      svn_url: 'https://github.com/jbodah/suggest_rb',
      homepage: '',
      size: 28,
      stargazers_count: 247,
      watchers_count: 247,
      language: 'Ruby',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 4,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['developer-tools', 'ruby'],
      visibility: 'public',
      forks: 4,
      open_issues: 1,
      watchers: 247,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 163503749,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjM1MDM3NDk=',
      name: 'AlipayPullRefresh',
      full_name: 'xmuSistone/AlipayPullRefresh',
      private: false,
      owner: {
        login: 'xmuSistone',
        id: 12167762,
        node_id: 'MDQ6VXNlcjEyMTY3NzYy',
        avatar_url: 'https://avatars.githubusercontent.com/u/12167762?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/xmuSistone',
        html_url: 'https://github.com/xmuSistone',
        followers_url: 'https://api.github.com/users/xmuSistone/followers',
        following_url:
          'https://api.github.com/users/xmuSistone/following{/other_user}',
        gists_url: 'https://api.github.com/users/xmuSistone/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/xmuSistone/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/xmuSistone/subscriptions',
        organizations_url: 'https://api.github.com/users/xmuSistone/orgs',
        repos_url: 'https://api.github.com/users/xmuSistone/repos',
        events_url: 'https://api.github.com/users/xmuSistone/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/xmuSistone/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/xmuSistone/AlipayPullRefresh',
      description: '支付宝首页下拉刷新',
      fork: false,
      url: 'https://api.github.com/repos/xmuSistone/AlipayPullRefresh',
      forks_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/forks',
      keys_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/teams',
      hooks_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/hooks',
      issue_events_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/events',
      assignees_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/tags',
      blobs_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/languages',
      stargazers_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/stargazers',
      contributors_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/contributors',
      subscribers_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/subscribers',
      subscription_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/subscription',
      commits_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/merges',
      archive_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/downloads',
      issues_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/labels{/name}',
      releases_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/xmuSistone/AlipayPullRefresh/deployments',
      created_at: '2018-12-29T10:56:34Z',
      updated_at: '2023-02-07T03:27:50Z',
      pushed_at: '2019-03-04T07:21:19Z',
      git_url: 'git://github.com/xmuSistone/AlipayPullRefresh.git',
      ssh_url: 'git@github.com:xmuSistone/AlipayPullRefresh.git',
      clone_url: 'https://github.com/xmuSistone/AlipayPullRefresh.git',
      svn_url: 'https://github.com/xmuSistone/AlipayPullRefresh',
      homepage: '',
      size: 15603,
      stargazers_count: 246,
      watchers_count: 246,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 37,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 37,
      open_issues: 1,
      watchers: 246,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 121298022,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjEyOTgwMjI=',
      name: 'react-articles',
      full_name: 'Mybridge/react-articles',
      private: false,
      owner: {
        login: 'Mybridge',
        id: 9070843,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjkwNzA4NDM=',
        avatar_url: 'https://avatars.githubusercontent.com/u/9070843?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Mybridge',
        html_url: 'https://github.com/Mybridge',
        followers_url: 'https://api.github.com/users/Mybridge/followers',
        following_url:
          'https://api.github.com/users/Mybridge/following{/other_user}',
        gists_url: 'https://api.github.com/users/Mybridge/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Mybridge/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Mybridge/subscriptions',
        organizations_url: 'https://api.github.com/users/Mybridge/orgs',
        repos_url: 'https://api.github.com/users/Mybridge/repos',
        events_url: 'https://api.github.com/users/Mybridge/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Mybridge/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/Mybridge/react-articles',
      description: 'Monthly Series - Top 10 React.js Articles',
      fork: false,
      url: 'https://api.github.com/repos/Mybridge/react-articles',
      forks_url: 'https://api.github.com/repos/Mybridge/react-articles/forks',
      keys_url:
        'https://api.github.com/repos/Mybridge/react-articles/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Mybridge/react-articles/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Mybridge/react-articles/teams',
      hooks_url: 'https://api.github.com/repos/Mybridge/react-articles/hooks',
      issue_events_url:
        'https://api.github.com/repos/Mybridge/react-articles/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Mybridge/react-articles/events',
      assignees_url:
        'https://api.github.com/repos/Mybridge/react-articles/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Mybridge/react-articles/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Mybridge/react-articles/tags',
      blobs_url:
        'https://api.github.com/repos/Mybridge/react-articles/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Mybridge/react-articles/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Mybridge/react-articles/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Mybridge/react-articles/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Mybridge/react-articles/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Mybridge/react-articles/languages',
      stargazers_url:
        'https://api.github.com/repos/Mybridge/react-articles/stargazers',
      contributors_url:
        'https://api.github.com/repos/Mybridge/react-articles/contributors',
      subscribers_url:
        'https://api.github.com/repos/Mybridge/react-articles/subscribers',
      subscription_url:
        'https://api.github.com/repos/Mybridge/react-articles/subscription',
      commits_url:
        'https://api.github.com/repos/Mybridge/react-articles/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Mybridge/react-articles/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Mybridge/react-articles/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Mybridge/react-articles/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Mybridge/react-articles/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Mybridge/react-articles/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Mybridge/react-articles/merges',
      archive_url:
        'https://api.github.com/repos/Mybridge/react-articles/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Mybridge/react-articles/downloads',
      issues_url:
        'https://api.github.com/repos/Mybridge/react-articles/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Mybridge/react-articles/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Mybridge/react-articles/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Mybridge/react-articles/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Mybridge/react-articles/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Mybridge/react-articles/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Mybridge/react-articles/deployments',
      created_at: '2018-02-12T20:29:05Z',
      updated_at: '2022-11-25T12:37:12Z',
      pushed_at: '2019-07-23T09:11:04Z',
      git_url: 'git://github.com/Mybridge/react-articles.git',
      ssh_url: 'git@github.com:Mybridge/react-articles.git',
      clone_url: 'https://github.com/Mybridge/react-articles.git',
      svn_url: 'https://github.com/Mybridge/react-articles',
      homepage: null,
      size: 10793,
      stargazers_count: 233,
      watchers_count: 233,
      language: null,
      has_issues: false,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 12,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['javascript', 'react', 'react-native', 'reactjs', 'redux'],
      visibility: 'public',
      forks: 12,
      open_issues: 0,
      watchers: 233,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 156230406,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTYyMzA0MDY=',
      name: 'uibook',
      full_name: 'vrizo/uibook',
      private: false,
      owner: {
        login: 'vrizo',
        id: 10763681,
        node_id: 'MDQ6VXNlcjEwNzYzNjgx',
        avatar_url: 'https://avatars.githubusercontent.com/u/10763681?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/vrizo',
        html_url: 'https://github.com/vrizo',
        followers_url: 'https://api.github.com/users/vrizo/followers',
        following_url:
          'https://api.github.com/users/vrizo/following{/other_user}',
        gists_url: 'https://api.github.com/users/vrizo/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/vrizo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/vrizo/subscriptions',
        organizations_url: 'https://api.github.com/users/vrizo/orgs',
        repos_url: 'https://api.github.com/users/vrizo/repos',
        events_url: 'https://api.github.com/users/vrizo/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/vrizo/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/vrizo/uibook',
      description:
        ' Lightweight tool for React components visual testing with media queries',
      fork: false,
      url: 'https://api.github.com/repos/vrizo/uibook',
      forks_url: 'https://api.github.com/repos/vrizo/uibook/forks',
      keys_url: 'https://api.github.com/repos/vrizo/uibook/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/vrizo/uibook/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/vrizo/uibook/teams',
      hooks_url: 'https://api.github.com/repos/vrizo/uibook/hooks',
      issue_events_url:
        'https://api.github.com/repos/vrizo/uibook/issues/events{/number}',
      events_url: 'https://api.github.com/repos/vrizo/uibook/events',
      assignees_url:
        'https://api.github.com/repos/vrizo/uibook/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/vrizo/uibook/branches{/branch}',
      tags_url: 'https://api.github.com/repos/vrizo/uibook/tags',
      blobs_url: 'https://api.github.com/repos/vrizo/uibook/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/vrizo/uibook/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/vrizo/uibook/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/vrizo/uibook/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/vrizo/uibook/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/vrizo/uibook/languages',
      stargazers_url: 'https://api.github.com/repos/vrizo/uibook/stargazers',
      contributors_url:
        'https://api.github.com/repos/vrizo/uibook/contributors',
      subscribers_url: 'https://api.github.com/repos/vrizo/uibook/subscribers',
      subscription_url:
        'https://api.github.com/repos/vrizo/uibook/subscription',
      commits_url: 'https://api.github.com/repos/vrizo/uibook/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/vrizo/uibook/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/vrizo/uibook/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/vrizo/uibook/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/vrizo/uibook/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/vrizo/uibook/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/vrizo/uibook/merges',
      archive_url:
        'https://api.github.com/repos/vrizo/uibook/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/vrizo/uibook/downloads',
      issues_url: 'https://api.github.com/repos/vrizo/uibook/issues{/number}',
      pulls_url: 'https://api.github.com/repos/vrizo/uibook/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/vrizo/uibook/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/vrizo/uibook/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/vrizo/uibook/labels{/name}',
      releases_url: 'https://api.github.com/repos/vrizo/uibook/releases{/id}',
      deployments_url: 'https://api.github.com/repos/vrizo/uibook/deployments',
      created_at: '2018-11-05T14:24:44Z',
      updated_at: '2022-11-17T12:28:10Z',
      pushed_at: '2023-01-07T23:08:35Z',
      git_url: 'git://github.com/vrizo/uibook.git',
      ssh_url: 'git@github.com:vrizo/uibook.git',
      clone_url: 'https://github.com/vrizo/uibook.git',
      svn_url: 'https://github.com/vrizo/uibook',
      homepage: '',
      size: 4686,
      stargazers_count: 229,
      watchers_count: 229,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 6,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 18,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 6,
      open_issues: 18,
      watchers: 229,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 121030914,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjEwMzA5MTQ=',
      name: 'javascript-articles',
      full_name: 'Mybridge/javascript-articles',
      private: false,
      owner: {
        login: 'Mybridge',
        id: 9070843,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjkwNzA4NDM=',
        avatar_url: 'https://avatars.githubusercontent.com/u/9070843?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Mybridge',
        html_url: 'https://github.com/Mybridge',
        followers_url: 'https://api.github.com/users/Mybridge/followers',
        following_url:
          'https://api.github.com/users/Mybridge/following{/other_user}',
        gists_url: 'https://api.github.com/users/Mybridge/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Mybridge/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Mybridge/subscriptions',
        organizations_url: 'https://api.github.com/users/Mybridge/orgs',
        repos_url: 'https://api.github.com/users/Mybridge/repos',
        events_url: 'https://api.github.com/users/Mybridge/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Mybridge/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/Mybridge/javascript-articles',
      description: 'Monthly Series - Top 10 JavaScript Articles',
      fork: false,
      url: 'https://api.github.com/repos/Mybridge/javascript-articles',
      forks_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/forks',
      keys_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/teams',
      hooks_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/hooks',
      issue_events_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/events',
      assignees_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/tags',
      blobs_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/languages',
      stargazers_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/stargazers',
      contributors_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/contributors',
      subscribers_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/subscribers',
      subscription_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/subscription',
      commits_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/merges',
      archive_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/downloads',
      issues_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Mybridge/javascript-articles/deployments',
      created_at: '2018-02-10T16:12:36Z',
      updated_at: '2023-01-08T11:10:59Z',
      pushed_at: '2019-07-25T10:24:32Z',
      git_url: 'git://github.com/Mybridge/javascript-articles.git',
      ssh_url: 'git@github.com:Mybridge/javascript-articles.git',
      clone_url: 'https://github.com/Mybridge/javascript-articles.git',
      svn_url: 'https://github.com/Mybridge/javascript-articles',
      homepage: null,
      size: 10492,
      stargazers_count: 224,
      watchers_count: 224,
      language: null,
      has_issues: false,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 14,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['javascript', 'monthly', 'webdevelopment', 'webpack'],
      visibility: 'public',
      forks: 14,
      open_issues: 0,
      watchers: 224,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 176046707,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzYwNDY3MDc=',
      name: 'asrock_deskmini310_hackintosh',
      full_name: 'liminghuang/asrock_deskmini310_hackintosh',
      private: false,
      owner: {
        login: 'liminghuang',
        id: 1393762,
        node_id: 'MDQ6VXNlcjEzOTM3NjI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1393762?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/liminghuang',
        html_url: 'https://github.com/liminghuang',
        followers_url: 'https://api.github.com/users/liminghuang/followers',
        following_url:
          'https://api.github.com/users/liminghuang/following{/other_user}',
        gists_url: 'https://api.github.com/users/liminghuang/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/liminghuang/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/liminghuang/subscriptions',
        organizations_url: 'https://api.github.com/users/liminghuang/orgs',
        repos_url: 'https://api.github.com/users/liminghuang/repos',
        events_url: 'https://api.github.com/users/liminghuang/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/liminghuang/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/liminghuang/asrock_deskmini310_hackintosh',
      description:
        'Install hackintosh(Mojave 10.14.x/10.15) in Asrock deskmini 310',
      fork: false,
      // url: 'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh',
      forks_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/forks',
      keys_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/teams',
      hooks_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/hooks',
      issue_events_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/events',
      assignees_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/tags',
      blobs_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/languages',
      stargazers_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/stargazers',
      contributors_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/contributors',
      subscribers_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/subscribers',
      subscription_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/subscription',
      commits_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/merges',
      archive_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/downloads',
      issues_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/labels{/name}',
      releases_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/liminghuang/asrock_deskmini310_hackintosh/deployments',
      created_at: '2019-03-17T02:20:46Z',
      updated_at: '2023-02-26T10:15:13Z',
      pushed_at: '2020-09-08T13:12:13Z',
      git_url: 'git://github.com/liminghuang/asrock_deskmini310_hackintosh.git',
      ssh_url: 'git@github.com:liminghuang/asrock_deskmini310_hackintosh.git',
      clone_url:
        'https://github.com/liminghuang/asrock_deskmini310_hackintosh.git',
      svn_url: 'https://github.com/liminghuang/asrock_deskmini310_hackintosh',
      homepage: '',
      size: 50183,
      stargazers_count: 223,
      watchers_count: 223,
      language: 'Rich Text Format',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 32,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 13,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 32,
      open_issues: 13,
      watchers: 223,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 112218666,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTIyMTg2NjY=',
      name: 'clarifyjs',
      full_name: 'omidh28/clarifyjs',
      private: false,
      owner: {
        login: 'omidh28',
        id: 11672360,
        node_id: 'MDQ6VXNlcjExNjcyMzYw',
        avatar_url: 'https://avatars.githubusercontent.com/u/11672360?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/omidh28',
        html_url: 'https://github.com/omidh28',
        followers_url: 'https://api.github.com/users/omidh28/followers',
        following_url:
          'https://api.github.com/users/omidh28/following{/other_user}',
        gists_url: 'https://api.github.com/users/omidh28/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/omidh28/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/omidh28/subscriptions',
        organizations_url: 'https://api.github.com/users/omidh28/orgs',
        repos_url: 'https://api.github.com/users/omidh28/repos',
        events_url: 'https://api.github.com/users/omidh28/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/omidh28/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/omidh28/clarifyjs',
      description:
        'Create and Execute Chained Javascript Methods In Any Order You want',
      fork: false,
      url: 'https://api.github.com/repos/omidh28/clarifyjs',
      forks_url: 'https://api.github.com/repos/omidh28/clarifyjs/forks',
      keys_url: 'https://api.github.com/repos/omidh28/clarifyjs/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/omidh28/clarifyjs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/omidh28/clarifyjs/teams',
      hooks_url: 'https://api.github.com/repos/omidh28/clarifyjs/hooks',
      issue_events_url:
        'https://api.github.com/repos/omidh28/clarifyjs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/omidh28/clarifyjs/events',
      assignees_url:
        'https://api.github.com/repos/omidh28/clarifyjs/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/omidh28/clarifyjs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/omidh28/clarifyjs/tags',
      blobs_url:
        'https://api.github.com/repos/omidh28/clarifyjs/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/omidh28/clarifyjs/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/omidh28/clarifyjs/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/omidh28/clarifyjs/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/omidh28/clarifyjs/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/omidh28/clarifyjs/languages',
      stargazers_url:
        'https://api.github.com/repos/omidh28/clarifyjs/stargazers',
      contributors_url:
        'https://api.github.com/repos/omidh28/clarifyjs/contributors',
      subscribers_url:
        'https://api.github.com/repos/omidh28/clarifyjs/subscribers',
      subscription_url:
        'https://api.github.com/repos/omidh28/clarifyjs/subscription',
      commits_url:
        'https://api.github.com/repos/omidh28/clarifyjs/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/omidh28/clarifyjs/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/omidh28/clarifyjs/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/omidh28/clarifyjs/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/omidh28/clarifyjs/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/omidh28/clarifyjs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/omidh28/clarifyjs/merges',
      archive_url:
        'https://api.github.com/repos/omidh28/clarifyjs/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/omidh28/clarifyjs/downloads',
      issues_url:
        'https://api.github.com/repos/omidh28/clarifyjs/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/omidh28/clarifyjs/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/omidh28/clarifyjs/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/omidh28/clarifyjs/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/omidh28/clarifyjs/labels{/name}',
      releases_url:
        'https://api.github.com/repos/omidh28/clarifyjs/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/omidh28/clarifyjs/deployments',
      created_at: '2017-11-27T16:13:04Z',
      updated_at: '2023-02-25T11:13:55Z',
      pushed_at: '2017-12-03T12:07:23Z',
      git_url: 'git://github.com/omidh28/clarifyjs.git',
      ssh_url: 'git@github.com:omidh28/clarifyjs.git',
      clone_url: 'https://github.com/omidh28/clarifyjs.git',
      svn_url: 'https://github.com/omidh28/clarifyjs',
      homepage: '',
      size: 373,
      stargazers_count: 223,
      watchers_count: 223,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 15,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['cascading', 'chained', 'javascript', 'syntax'],
      visibility: 'public',
      forks: 15,
      open_issues: 1,
      watchers: 223,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 190991937,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTA5OTE5Mzc=',
      name: 'GRDBCombine',
      full_name: 'groue/GRDBCombine',
      private: false,
      owner: {
        login: 'groue',
        id: 54219,
        node_id: 'MDQ6VXNlcjU0MjE5',
        avatar_url: 'https://avatars.githubusercontent.com/u/54219?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/groue',
        html_url: 'https://github.com/groue',
        followers_url: 'https://api.github.com/users/groue/followers',
        following_url:
          'https://api.github.com/users/groue/following{/other_user}',
        gists_url: 'https://api.github.com/users/groue/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/groue/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/groue/subscriptions',
        organizations_url: 'https://api.github.com/users/groue/orgs',
        repos_url: 'https://api.github.com/users/groue/repos',
        events_url: 'https://api.github.com/users/groue/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/groue/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/groue/GRDBCombine',
      description: 'GRDB ❤️ Combine',
      fork: false,
      url: 'https://api.github.com/repos/groue/GRDBCombine',
      forks_url: 'https://api.github.com/repos/groue/GRDBCombine/forks',
      keys_url: 'https://api.github.com/repos/groue/GRDBCombine/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/groue/GRDBCombine/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/groue/GRDBCombine/teams',
      hooks_url: 'https://api.github.com/repos/groue/GRDBCombine/hooks',
      issue_events_url:
        'https://api.github.com/repos/groue/GRDBCombine/issues/events{/number}',
      events_url: 'https://api.github.com/repos/groue/GRDBCombine/events',
      assignees_url:
        'https://api.github.com/repos/groue/GRDBCombine/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/groue/GRDBCombine/branches{/branch}',
      tags_url: 'https://api.github.com/repos/groue/GRDBCombine/tags',
      blobs_url:
        'https://api.github.com/repos/groue/GRDBCombine/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/groue/GRDBCombine/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/groue/GRDBCombine/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/groue/GRDBCombine/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/groue/GRDBCombine/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/groue/GRDBCombine/languages',
      stargazers_url:
        'https://api.github.com/repos/groue/GRDBCombine/stargazers',
      contributors_url:
        'https://api.github.com/repos/groue/GRDBCombine/contributors',
      subscribers_url:
        'https://api.github.com/repos/groue/GRDBCombine/subscribers',
      subscription_url:
        'https://api.github.com/repos/groue/GRDBCombine/subscription',
      commits_url:
        'https://api.github.com/repos/groue/GRDBCombine/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/groue/GRDBCombine/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/groue/GRDBCombine/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/groue/GRDBCombine/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/groue/GRDBCombine/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/groue/GRDBCombine/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/groue/GRDBCombine/merges',
      archive_url:
        'https://api.github.com/repos/groue/GRDBCombine/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/groue/GRDBCombine/downloads',
      issues_url:
        'https://api.github.com/repos/groue/GRDBCombine/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/groue/GRDBCombine/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/groue/GRDBCombine/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/groue/GRDBCombine/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/groue/GRDBCombine/labels{/name}',
      releases_url:
        'https://api.github.com/repos/groue/GRDBCombine/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/groue/GRDBCombine/deployments',
      created_at: '2019-06-09T10:16:43Z',
      updated_at: '2023-02-23T19:29:42Z',
      pushed_at: '2020-06-30T06:53:19Z',
      git_url: 'git://github.com/groue/GRDBCombine.git',
      ssh_url: 'git@github.com:groue/GRDBCombine.git',
      clone_url: 'https://github.com/groue/GRDBCombine.git',
      svn_url: 'https://github.com/groue/GRDBCombine',
      homepage: null,
      size: 2292,
      stargazers_count: 222,
      watchers_count: 222,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 16,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'combine',
        'database',
        'grdb',
        'reactive',
        'spm',
        'sql',
        'sqlite',
      ],
      visibility: 'public',
      forks: 16,
      open_issues: 0,
      watchers: 222,
      default_branch: 'farewell',
      score: 1.0,
    },
    {
      id: 193892924,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTM4OTI5MjQ=',
      name: 'jamdocs',
      full_name: 'samuelhorn/jamdocs',
      private: false,
      owner: {
        login: 'samuelhorn',
        id: 2532266,
        node_id: 'MDQ6VXNlcjI1MzIyNjY=',
        avatar_url: 'https://avatars.githubusercontent.com/u/2532266?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/samuelhorn',
        html_url: 'https://github.com/samuelhorn',
        followers_url: 'https://api.github.com/users/samuelhorn/followers',
        following_url:
          'https://api.github.com/users/samuelhorn/following{/other_user}',
        gists_url: 'https://api.github.com/users/samuelhorn/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/samuelhorn/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/samuelhorn/subscriptions',
        organizations_url: 'https://api.github.com/users/samuelhorn/orgs',
        repos_url: 'https://api.github.com/users/samuelhorn/repos',
        events_url: 'https://api.github.com/users/samuelhorn/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/samuelhorn/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/samuelhorn/jamdocs',
      description:
        'The ultimate staic generated documentation theme for the JAM-stack. Highly cusomizable, based on Gridsome, ready to deploy to Netlify in one click.',
      fork: false,
      url: 'https://api.github.com/repos/samuelhorn/jamdocs',
      forks_url: 'https://api.github.com/repos/samuelhorn/jamdocs/forks',
      keys_url: 'https://api.github.com/repos/samuelhorn/jamdocs/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/samuelhorn/jamdocs/teams',
      hooks_url: 'https://api.github.com/repos/samuelhorn/jamdocs/hooks',
      issue_events_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/samuelhorn/jamdocs/events',
      assignees_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/samuelhorn/jamdocs/tags',
      blobs_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/languages',
      stargazers_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/stargazers',
      contributors_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/contributors',
      subscribers_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/subscribers',
      subscription_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/subscription',
      commits_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/samuelhorn/jamdocs/merges',
      archive_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/downloads',
      issues_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/labels{/name}',
      releases_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/samuelhorn/jamdocs/deployments',
      created_at: '2019-06-26T11:39:42Z',
      updated_at: '2023-01-18T14:14:36Z',
      pushed_at: '2022-12-10T20:20:31Z',
      git_url: 'git://github.com/samuelhorn/jamdocs.git',
      ssh_url: 'git@github.com:samuelhorn/jamdocs.git',
      clone_url: 'https://github.com/samuelhorn/jamdocs.git',
      svn_url: 'https://github.com/samuelhorn/jamdocs',
      homepage: null,
      size: 1454,
      stargazers_count: 218,
      watchers_count: 218,
      language: 'Vue',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 94,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 22,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 94,
      open_issues: 22,
      watchers: 218,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 134732441,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ3MzI0NDE=',
      name: 'ClearGDPR',
      full_name: 'ClearGDPR/ClearGDPR',
      private: false,
      owner: {
        login: 'ClearGDPR',
        id: 39530558,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTMwNTU4',
        avatar_url: 'https://avatars.githubusercontent.com/u/39530558?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ClearGDPR',
        html_url: 'https://github.com/ClearGDPR',
        followers_url: 'https://api.github.com/users/ClearGDPR/followers',
        following_url:
          'https://api.github.com/users/ClearGDPR/following{/other_user}',
        gists_url: 'https://api.github.com/users/ClearGDPR/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ClearGDPR/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ClearGDPR/subscriptions',
        organizations_url: 'https://api.github.com/users/ClearGDPR/orgs',
        repos_url: 'https://api.github.com/users/ClearGDPR/repos',
        events_url: 'https://api.github.com/users/ClearGDPR/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ClearGDPR/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/ClearGDPR/ClearGDPR',
      description: 'GDPR Compliance Solution',
      fork: false,
      url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR',
      forks_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/forks',
      keys_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/teams',
      hooks_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/hooks',
      issue_events_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/issues/events{/number}',
      events_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/events',
      assignees_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/branches{/branch}',
      tags_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/tags',
      blobs_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/languages',
      stargazers_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/stargazers',
      contributors_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/contributors',
      subscribers_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/subscribers',
      subscription_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/subscription',
      commits_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/ClearGDPR/ClearGDPR/merges',
      archive_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/downloads',
      issues_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ClearGDPR/ClearGDPR/deployments',
      created_at: '2018-05-24T15:09:37Z',
      updated_at: '2023-02-07T20:06:19Z',
      pushed_at: '2018-12-21T00:59:24Z',
      git_url: 'git://github.com/ClearGDPR/ClearGDPR.git',
      ssh_url: 'git@github.com:ClearGDPR/ClearGDPR.git',
      clone_url: 'https://github.com/ClearGDPR/ClearGDPR.git',
      svn_url: 'https://github.com/ClearGDPR/ClearGDPR',
      homepage: 'https://www.cleargdpr.com/',
      size: 4563,
      stargazers_count: 217,
      watchers_count: 217,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 43,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 36,
      license: {
        key: 'lgpl-3.0',
        name: 'GNU Lesser General Public License v3.0',
        spdx_id: 'LGPL-3.0',
        url: 'https://api.github.com/licenses/lgpl-3.0',
        node_id: 'MDc6TGljZW5zZTEy',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['architecture', 'blockchain', 'gdpr', 'javascript', 'react'],
      visibility: 'public',
      forks: 43,
      open_issues: 36,
      watchers: 217,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 110920562,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTA5MjA1NjI=',
      name: 'react-native-whcapp',
      full_name: 'netyouli/react-native-whcapp',
      private: false,
      owner: {
        login: 'netyouli',
        id: 5723961,
        node_id: 'MDQ6VXNlcjU3MjM5NjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/5723961?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/netyouli',
        html_url: 'https://github.com/netyouli',
        followers_url: 'https://api.github.com/users/netyouli/followers',
        following_url:
          'https://api.github.com/users/netyouli/following{/other_user}',
        gists_url: 'https://api.github.com/users/netyouli/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/netyouli/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/netyouli/subscriptions',
        organizations_url: 'https://api.github.com/users/netyouli/orgs',
        repos_url: 'https://api.github.com/users/netyouli/repos',
        events_url: 'https://api.github.com/users/netyouli/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/netyouli/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/netyouli/react-native-whcapp',
      description:
        'react-native + redux whcapp Provide learning advice for learning react-native development  Support: Android 5+ iOS 8.0+,一个完整的react-native app 并且带有完整的数据交互实现',
      fork: false,
      url: 'https://api.github.com/repos/netyouli/react-native-whcapp',
      forks_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/forks',
      keys_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/teams',
      hooks_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/hooks',
      issue_events_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/events',
      assignees_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/tags',
      blobs_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/languages',
      stargazers_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/stargazers',
      contributors_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/contributors',
      subscribers_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/subscribers',
      subscription_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/subscription',
      commits_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/merges',
      archive_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/downloads',
      issues_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/labels{/name}',
      releases_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/netyouli/react-native-whcapp/deployments',
      created_at: '2017-11-16T03:54:58Z',
      updated_at: '2023-02-17T03:43:52Z',
      pushed_at: '2021-04-13T13:36:44Z',
      git_url: 'git://github.com/netyouli/react-native-whcapp.git',
      ssh_url: 'git@github.com:netyouli/react-native-whcapp.git',
      clone_url: 'https://github.com/netyouli/react-native-whcapp.git',
      svn_url: 'https://github.com/netyouli/react-native-whcapp',
      homepage: 'http://www.wuhaichao.com',
      size: 9185,
      stargazers_count: 216,
      watchers_count: 216,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 40,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['react', 'react-native', 'react-native-app', 'whc', 'whcapp'],
      visibility: 'public',
      forks: 40,
      open_issues: 0,
      watchers: 216,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 122562112,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjI1NjIxMTI=',
      name: 'swiftfmt',
      full_name: 'kishikawakatsumi/swiftfmt',
      private: false,
      owner: {
        login: 'kishikawakatsumi',
        id: 40610,
        node_id: 'MDQ6VXNlcjQwNjEw',
        avatar_url: 'https://avatars.githubusercontent.com/u/40610?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/kishikawakatsumi',
        html_url: 'https://github.com/kishikawakatsumi',
        followers_url:
          'https://api.github.com/users/kishikawakatsumi/followers',
        following_url:
          'https://api.github.com/users/kishikawakatsumi/following{/other_user}',
        gists_url:
          'https://api.github.com/users/kishikawakatsumi/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/kishikawakatsumi/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/kishikawakatsumi/subscriptions',
        organizations_url: 'https://api.github.com/users/kishikawakatsumi/orgs',
        repos_url: 'https://api.github.com/users/kishikawakatsumi/repos',
        events_url:
          'https://api.github.com/users/kishikawakatsumi/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/kishikawakatsumi/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/kishikawakatsumi/swiftfmt',
      description: 'Format Swift code',
      fork: false,
      url: 'https://api.github.com/repos/kishikawakatsumi/swiftfmt',
      forks_url: 'https://api.github.com/repos/kishikawakatsumi/swiftfmt/forks',
      keys_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/kishikawakatsumi/swiftfmt/teams',
      hooks_url: 'https://api.github.com/repos/kishikawakatsumi/swiftfmt/hooks',
      issue_events_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/events',
      assignees_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/branches{/branch}',
      tags_url: 'https://api.github.com/repos/kishikawakatsumi/swiftfmt/tags',
      blobs_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/languages',
      stargazers_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/stargazers',
      contributors_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/contributors',
      subscribers_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/subscribers',
      subscription_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/subscription',
      commits_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/merges',
      archive_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/downloads',
      issues_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/labels{/name}',
      releases_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/kishikawakatsumi/swiftfmt/deployments',
      created_at: '2018-02-23T02:18:20Z',
      updated_at: '2022-06-21T03:24:08Z',
      pushed_at: '2020-09-30T09:28:57Z',
      git_url: 'git://github.com/kishikawakatsumi/swiftfmt.git',
      ssh_url: 'git@github.com:kishikawakatsumi/swiftfmt.git',
      clone_url: 'https://github.com/kishikawakatsumi/swiftfmt.git',
      svn_url: 'https://github.com/kishikawakatsumi/swiftfmt',
      homepage: '',
      size: 67,
      stargazers_count: 215,
      watchers_count: 215,
      language: 'Swift',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 7,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 7,
      open_issues: 1,
      watchers: 215,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 145300572,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDUzMDA1NzI=',
      name: 'SlideBack',
      full_name: 'ChenTianSaber/SlideBack',
      private: false,
      owner: {
        login: 'ChenTianSaber',
        id: 16030568,
        node_id: 'MDQ6VXNlcjE2MDMwNTY4',
        avatar_url: 'https://avatars.githubusercontent.com/u/16030568?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ChenTianSaber',
        html_url: 'https://github.com/ChenTianSaber',
        followers_url: 'https://api.github.com/users/ChenTianSaber/followers',
        following_url:
          'https://api.github.com/users/ChenTianSaber/following{/other_user}',
        gists_url: 'https://api.github.com/users/ChenTianSaber/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ChenTianSaber/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ChenTianSaber/subscriptions',
        organizations_url: 'https://api.github.com/users/ChenTianSaber/orgs',
        repos_url: 'https://api.github.com/users/ChenTianSaber/repos',
        events_url:
          'https://api.github.com/users/ChenTianSaber/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ChenTianSaber/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ChenTianSaber/SlideBack',
      description: '一个可以让你页面支持 滑动返回 的小东西',
      fork: false,
      url: 'https://api.github.com/repos/ChenTianSaber/SlideBack',
      forks_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/forks',
      keys_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/teams',
      hooks_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/hooks',
      issue_events_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/issues/events{/number}',
      events_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/events',
      assignees_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/branches{/branch}',
      tags_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/tags',
      blobs_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/languages',
      stargazers_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/stargazers',
      contributors_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/contributors',
      subscribers_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/subscribers',
      subscription_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/subscription',
      commits_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/ChenTianSaber/SlideBack/merges',
      archive_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/downloads',
      issues_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ChenTianSaber/SlideBack/deployments',
      created_at: '2018-08-19T12:19:42Z',
      updated_at: '2022-12-29T14:09:40Z',
      pushed_at: '2019-02-12T10:52:26Z',
      git_url: 'git://github.com/ChenTianSaber/SlideBack.git',
      ssh_url: 'git@github.com:ChenTianSaber/SlideBack.git',
      clone_url: 'https://github.com/ChenTianSaber/SlideBack.git',
      svn_url: 'https://github.com/ChenTianSaber/SlideBack',
      homepage: '',
      size: 151,
      stargazers_count: 210,
      watchers_count: 210,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 24,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 24,
      open_issues: 1,
      watchers: 210,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 113799714,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTM3OTk3MTQ=',
      name: 'react-framer',
      full_name: 'dabbott/react-framer',
      private: false,
      owner: {
        login: 'dabbott',
        id: 1198882,
        node_id: 'MDQ6VXNlcjExOTg4ODI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1198882?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dabbott',
        html_url: 'https://github.com/dabbott',
        followers_url: 'https://api.github.com/users/dabbott/followers',
        following_url:
          'https://api.github.com/users/dabbott/following{/other_user}',
        gists_url: 'https://api.github.com/users/dabbott/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/dabbott/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dabbott/subscriptions',
        organizations_url: 'https://api.github.com/users/dabbott/orgs',
        repos_url: 'https://api.github.com/users/dabbott/repos',
        events_url: 'https://api.github.com/users/dabbott/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/dabbott/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/dabbott/react-framer',
      description:
        'Create Framer (https://framer.com) prototypes using React (https://reactjs.org/)',
      fork: false,
      url: 'https://api.github.com/repos/dabbott/react-framer',
      forks_url: 'https://api.github.com/repos/dabbott/react-framer/forks',
      keys_url:
        'https://api.github.com/repos/dabbott/react-framer/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/dabbott/react-framer/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/dabbott/react-framer/teams',
      hooks_url: 'https://api.github.com/repos/dabbott/react-framer/hooks',
      issue_events_url:
        'https://api.github.com/repos/dabbott/react-framer/issues/events{/number}',
      events_url: 'https://api.github.com/repos/dabbott/react-framer/events',
      assignees_url:
        'https://api.github.com/repos/dabbott/react-framer/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/dabbott/react-framer/branches{/branch}',
      tags_url: 'https://api.github.com/repos/dabbott/react-framer/tags',
      blobs_url:
        'https://api.github.com/repos/dabbott/react-framer/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/dabbott/react-framer/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/dabbott/react-framer/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/dabbott/react-framer/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/dabbott/react-framer/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/dabbott/react-framer/languages',
      stargazers_url:
        'https://api.github.com/repos/dabbott/react-framer/stargazers',
      contributors_url:
        'https://api.github.com/repos/dabbott/react-framer/contributors',
      subscribers_url:
        'https://api.github.com/repos/dabbott/react-framer/subscribers',
      subscription_url:
        'https://api.github.com/repos/dabbott/react-framer/subscription',
      commits_url:
        'https://api.github.com/repos/dabbott/react-framer/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/dabbott/react-framer/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/dabbott/react-framer/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/dabbott/react-framer/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/dabbott/react-framer/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/dabbott/react-framer/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/dabbott/react-framer/merges',
      archive_url:
        'https://api.github.com/repos/dabbott/react-framer/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/dabbott/react-framer/downloads',
      issues_url:
        'https://api.github.com/repos/dabbott/react-framer/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/dabbott/react-framer/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/dabbott/react-framer/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/dabbott/react-framer/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/dabbott/react-framer/labels{/name}',
      releases_url:
        'https://api.github.com/repos/dabbott/react-framer/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/dabbott/react-framer/deployments',
      created_at: '2017-12-11T01:48:27Z',
      updated_at: '2022-06-25T13:52:00Z',
      pushed_at: '2017-12-17T21:28:28Z',
      git_url: 'git://github.com/dabbott/react-framer.git',
      ssh_url: 'git@github.com:dabbott/react-framer.git',
      clone_url: 'https://github.com/dabbott/react-framer.git',
      svn_url: 'https://github.com/dabbott/react-framer',
      homepage: '',
      size: 1104,
      stargazers_count: 208,
      watchers_count: 208,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 7,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 2,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 7,
      open_issues: 2,
      watchers: 208,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 142668884,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDI2Njg4ODQ=',
      name: 'carbonate',
      full_name: 'yonicd/carbonate',
      private: false,
      owner: {
        login: 'yonicd',
        id: 1755487,
        node_id: 'MDQ6VXNlcjE3NTU0ODc=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1755487?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/yonicd',
        html_url: 'https://github.com/yonicd',
        followers_url: 'https://api.github.com/users/yonicd/followers',
        following_url:
          'https://api.github.com/users/yonicd/following{/other_user}',
        gists_url: 'https://api.github.com/users/yonicd/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/yonicd/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/yonicd/subscriptions',
        organizations_url: 'https://api.github.com/users/yonicd/orgs',
        repos_url: 'https://api.github.com/users/yonicd/repos',
        events_url: 'https://api.github.com/users/yonicd/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/yonicd/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/yonicd/carbonate',
      description: 'carbon.js for R',
      fork: false,
      url: 'https://api.github.com/repos/yonicd/carbonate',
      forks_url: 'https://api.github.com/repos/yonicd/carbonate/forks',
      keys_url: 'https://api.github.com/repos/yonicd/carbonate/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/yonicd/carbonate/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/yonicd/carbonate/teams',
      hooks_url: 'https://api.github.com/repos/yonicd/carbonate/hooks',
      issue_events_url:
        'https://api.github.com/repos/yonicd/carbonate/issues/events{/number}',
      events_url: 'https://api.github.com/repos/yonicd/carbonate/events',
      assignees_url:
        'https://api.github.com/repos/yonicd/carbonate/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/yonicd/carbonate/branches{/branch}',
      tags_url: 'https://api.github.com/repos/yonicd/carbonate/tags',
      blobs_url:
        'https://api.github.com/repos/yonicd/carbonate/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/yonicd/carbonate/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/yonicd/carbonate/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/yonicd/carbonate/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/yonicd/carbonate/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/yonicd/carbonate/languages',
      stargazers_url:
        'https://api.github.com/repos/yonicd/carbonate/stargazers',
      contributors_url:
        'https://api.github.com/repos/yonicd/carbonate/contributors',
      subscribers_url:
        'https://api.github.com/repos/yonicd/carbonate/subscribers',
      subscription_url:
        'https://api.github.com/repos/yonicd/carbonate/subscription',
      commits_url:
        'https://api.github.com/repos/yonicd/carbonate/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/yonicd/carbonate/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/yonicd/carbonate/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/yonicd/carbonate/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/yonicd/carbonate/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/yonicd/carbonate/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/yonicd/carbonate/merges',
      archive_url:
        'https://api.github.com/repos/yonicd/carbonate/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/yonicd/carbonate/downloads',
      issues_url:
        'https://api.github.com/repos/yonicd/carbonate/issues{/number}',
      pulls_url: 'https://api.github.com/repos/yonicd/carbonate/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/yonicd/carbonate/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/yonicd/carbonate/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/yonicd/carbonate/labels{/name}',
      releases_url:
        'https://api.github.com/repos/yonicd/carbonate/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/yonicd/carbonate/deployments',
      created_at: '2018-07-28T10:35:59Z',
      updated_at: '2022-12-07T08:23:09Z',
      pushed_at: '2022-08-26T00:38:25Z',
      git_url: 'git://github.com/yonicd/carbonate.git',
      ssh_url: 'git@github.com:yonicd/carbonate.git',
      clone_url: 'https://github.com/yonicd/carbonate.git',
      svn_url: 'https://github.com/yonicd/carbonate',
      homepage: 'https://yonicd.github.io/carbonate/',
      size: 31368,
      stargazers_count: 208,
      watchers_count: 208,
      language: 'R',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 5,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 4,
      license: {
        key: 'other',
        name: 'Other',
        spdx_id: 'NOASSERTION',
        url: null,
        node_id: 'MDc6TGljZW5zZTA=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 5,
      open_issues: 4,
      watchers: 208,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 125718950,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjU3MTg5NTA=',
      name: 'front-end-interview',
      full_name: 'nieyafei/front-end-interview',
      private: false,
      owner: {
        login: 'nieyafei',
        id: 8522390,
        node_id: 'MDQ6VXNlcjg1MjIzOTA=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8522390?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/nieyafei',
        html_url: 'https://github.com/nieyafei',
        followers_url: 'https://api.github.com/users/nieyafei/followers',
        following_url:
          'https://api.github.com/users/nieyafei/following{/other_user}',
        gists_url: 'https://api.github.com/users/nieyafei/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/nieyafei/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/nieyafei/subscriptions',
        organizations_url: 'https://api.github.com/users/nieyafei/orgs',
        repos_url: 'https://api.github.com/users/nieyafei/repos',
        events_url: 'https://api.github.com/users/nieyafei/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/nieyafei/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/nieyafei/front-end-interview',
      description: '前端面试interview题目收集，持续更新，勿浅尝辄止',
      fork: false,
      url: 'https://api.github.com/repos/nieyafei/front-end-interview',
      forks_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/forks',
      keys_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/teams',
      hooks_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/hooks',
      issue_events_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/events',
      assignees_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/tags',
      blobs_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/languages',
      stargazers_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/stargazers',
      contributors_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/contributors',
      subscribers_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/subscribers',
      subscription_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/subscription',
      commits_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/merges',
      archive_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/downloads',
      issues_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/labels{/name}',
      releases_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/nieyafei/front-end-interview/deployments',
      created_at: '2018-03-18T11:41:59Z',
      updated_at: '2022-08-15T14:48:12Z',
      pushed_at: '2022-03-26T21:02:00Z',
      git_url: 'git://github.com/nieyafei/front-end-interview.git',
      ssh_url: 'git@github.com:nieyafei/front-end-interview.git',
      clone_url: 'https://github.com/nieyafei/front-end-interview.git',
      svn_url: 'https://github.com/nieyafei/front-end-interview',
      homepage: 'http://codehtml.cn/front-end-interview',
      size: 2470,
      stargazers_count: 207,
      watchers_count: 207,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 48,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 92,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 48,
      open_issues: 92,
      watchers: 207,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 297146631,
      node_id: 'MDEwOlJlcG9zaXRvcnkyOTcxNDY2MzE=',
      name: 'stampede',
      full_name: 'bashovski/stampede',
      private: false,
      owner: {
        login: 'bashovski',
        id: 48890281,
        node_id: 'MDQ6VXNlcjQ4ODkwMjgx',
        avatar_url: 'https://avatars.githubusercontent.com/u/48890281?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/bashovski',
        html_url: 'https://github.com/bashovski',
        followers_url: 'https://api.github.com/users/bashovski/followers',
        following_url:
          'https://api.github.com/users/bashovski/following{/other_user}',
        gists_url: 'https://api.github.com/users/bashovski/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/bashovski/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/bashovski/subscriptions',
        organizations_url: 'https://api.github.com/users/bashovski/orgs',
        repos_url: 'https://api.github.com/users/bashovski/repos',
        events_url: 'https://api.github.com/users/bashovski/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/bashovski/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/bashovski/stampede',
      description: '🦕 Deno REST framework/eco-system',
      fork: false,
      url: 'https://api.github.com/repos/bashovski/stampede',
      forks_url: 'https://api.github.com/repos/bashovski/stampede/forks',
      keys_url: 'https://api.github.com/repos/bashovski/stampede/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/bashovski/stampede/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/bashovski/stampede/teams',
      hooks_url: 'https://api.github.com/repos/bashovski/stampede/hooks',
      issue_events_url:
        'https://api.github.com/repos/bashovski/stampede/issues/events{/number}',
      events_url: 'https://api.github.com/repos/bashovski/stampede/events',
      assignees_url:
        'https://api.github.com/repos/bashovski/stampede/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/bashovski/stampede/branches{/branch}',
      tags_url: 'https://api.github.com/repos/bashovski/stampede/tags',
      blobs_url:
        'https://api.github.com/repos/bashovski/stampede/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/bashovski/stampede/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/bashovski/stampede/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/bashovski/stampede/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/bashovski/stampede/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/bashovski/stampede/languages',
      stargazers_url:
        'https://api.github.com/repos/bashovski/stampede/stargazers',
      contributors_url:
        'https://api.github.com/repos/bashovski/stampede/contributors',
      subscribers_url:
        'https://api.github.com/repos/bashovski/stampede/subscribers',
      subscription_url:
        'https://api.github.com/repos/bashovski/stampede/subscription',
      commits_url:
        'https://api.github.com/repos/bashovski/stampede/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/bashovski/stampede/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/bashovski/stampede/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/bashovski/stampede/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/bashovski/stampede/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/bashovski/stampede/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/bashovski/stampede/merges',
      archive_url:
        'https://api.github.com/repos/bashovski/stampede/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/bashovski/stampede/downloads',
      issues_url:
        'https://api.github.com/repos/bashovski/stampede/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/bashovski/stampede/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/bashovski/stampede/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/bashovski/stampede/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/bashovski/stampede/labels{/name}',
      releases_url:
        'https://api.github.com/repos/bashovski/stampede/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/bashovski/stampede/deployments',
      created_at: '2020-09-20T19:17:03Z',
      updated_at: '2023-01-07T00:03:16Z',
      pushed_at: '2023-04-21T17:24:05Z',
      git_url: 'git://github.com/bashovski/stampede.git',
      ssh_url: 'git@github.com:bashovski/stampede.git',
      clone_url: 'https://github.com/bashovski/stampede.git',
      svn_url: 'https://github.com/bashovski/stampede',
      homepage: '',
      size: 769,
      stargazers_count: 207,
      watchers_count: 207,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 4,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 13,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: true,
      web_commit_signoff_required: false,
      topics: [
        'deno',
        'framework',
        'hacktoberfest',
        'hacktoberfest2021',
        'rest',
        'rest-api',
        'typescript',
      ],
      visibility: 'public',
      forks: 4,
      open_issues: 13,
      watchers: 207,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 120488765,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjA0ODg3NjU=',
      name: 'Prefekt',
      full_name: 'StylingAndroid/Prefekt',
      private: false,
      owner: {
        login: 'StylingAndroid',
        id: 933874,
        node_id: 'MDQ6VXNlcjkzMzg3NA==',
        avatar_url: 'https://avatars.githubusercontent.com/u/933874?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/StylingAndroid',
        html_url: 'https://github.com/StylingAndroid',
        followers_url: 'https://api.github.com/users/StylingAndroid/followers',
        following_url:
          'https://api.github.com/users/StylingAndroid/following{/other_user}',
        gists_url:
          'https://api.github.com/users/StylingAndroid/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/StylingAndroid/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/StylingAndroid/subscriptions',
        organizations_url: 'https://api.github.com/users/StylingAndroid/orgs',
        repos_url: 'https://api.github.com/users/StylingAndroid/repos',
        events_url:
          'https://api.github.com/users/StylingAndroid/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/StylingAndroid/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/StylingAndroid/Prefekt',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/StylingAndroid/Prefekt',
      forks_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/forks',
      keys_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/teams',
      hooks_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/hooks',
      issue_events_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/issues/events{/number}',
      events_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/events',
      assignees_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/branches{/branch}',
      tags_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/tags',
      blobs_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/languages',
      stargazers_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/stargazers',
      contributors_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/contributors',
      subscribers_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/subscribers',
      subscription_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/subscription',
      commits_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/StylingAndroid/Prefekt/merges',
      archive_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/downloads',
      issues_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/labels{/name}',
      releases_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/StylingAndroid/Prefekt/deployments',
      created_at: '2018-02-06T16:33:39Z',
      updated_at: '2023-02-03T22:12:32Z',
      pushed_at: '2018-03-02T09:13:14Z',
      git_url: 'git://github.com/StylingAndroid/Prefekt.git',
      ssh_url: 'git@github.com:StylingAndroid/Prefekt.git',
      clone_url: 'https://github.com/StylingAndroid/Prefekt.git',
      svn_url: 'https://github.com/StylingAndroid/Prefekt',
      homepage: 'https://blog.stylingandroid.com/prefekt-introduction/',
      size: 286,
      stargazers_count: 205,
      watchers_count: 205,
      language: 'Kotlin',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 9,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 2,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 9,
      open_issues: 2,
      watchers: 205,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 192080874,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTIwODA4NzQ=',
      name: 'Brancher',
      full_name: 'AI-DI/Brancher',
      private: false,
      owner: {
        login: 'AI-DI',
        id: 45498107,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ1NDk4MTA3',
        avatar_url: 'https://avatars.githubusercontent.com/u/45498107?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/AI-DI',
        html_url: 'https://github.com/AI-DI',
        followers_url: 'https://api.github.com/users/AI-DI/followers',
        following_url:
          'https://api.github.com/users/AI-DI/following{/other_user}',
        gists_url: 'https://api.github.com/users/AI-DI/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/AI-DI/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/AI-DI/subscriptions',
        organizations_url: 'https://api.github.com/users/AI-DI/orgs',
        repos_url: 'https://api.github.com/users/AI-DI/repos',
        events_url: 'https://api.github.com/users/AI-DI/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/AI-DI/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/AI-DI/Brancher',
      description:
        'A user-centered Python package for differentiable probabilistic inference',
      fork: false,
      url: 'https://api.github.com/repos/AI-DI/Brancher',
      forks_url: 'https://api.github.com/repos/AI-DI/Brancher/forks',
      keys_url: 'https://api.github.com/repos/AI-DI/Brancher/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/AI-DI/Brancher/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/AI-DI/Brancher/teams',
      hooks_url: 'https://api.github.com/repos/AI-DI/Brancher/hooks',
      issue_events_url:
        'https://api.github.com/repos/AI-DI/Brancher/issues/events{/number}',
      events_url: 'https://api.github.com/repos/AI-DI/Brancher/events',
      assignees_url:
        'https://api.github.com/repos/AI-DI/Brancher/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/AI-DI/Brancher/branches{/branch}',
      tags_url: 'https://api.github.com/repos/AI-DI/Brancher/tags',
      blobs_url: 'https://api.github.com/repos/AI-DI/Brancher/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/AI-DI/Brancher/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/AI-DI/Brancher/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/AI-DI/Brancher/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/AI-DI/Brancher/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/AI-DI/Brancher/languages',
      stargazers_url: 'https://api.github.com/repos/AI-DI/Brancher/stargazers',
      contributors_url:
        'https://api.github.com/repos/AI-DI/Brancher/contributors',
      subscribers_url:
        'https://api.github.com/repos/AI-DI/Brancher/subscribers',
      subscription_url:
        'https://api.github.com/repos/AI-DI/Brancher/subscription',
      commits_url: 'https://api.github.com/repos/AI-DI/Brancher/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/AI-DI/Brancher/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/AI-DI/Brancher/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/AI-DI/Brancher/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/AI-DI/Brancher/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/AI-DI/Brancher/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/AI-DI/Brancher/merges',
      archive_url:
        'https://api.github.com/repos/AI-DI/Brancher/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/AI-DI/Brancher/downloads',
      issues_url: 'https://api.github.com/repos/AI-DI/Brancher/issues{/number}',
      pulls_url: 'https://api.github.com/repos/AI-DI/Brancher/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/AI-DI/Brancher/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/AI-DI/Brancher/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/AI-DI/Brancher/labels{/name}',
      releases_url: 'https://api.github.com/repos/AI-DI/Brancher/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/AI-DI/Brancher/deployments',
      created_at: '2019-06-15T13:18:52Z',
      updated_at: '2022-10-04T07:49:01Z',
      pushed_at: '2020-09-17T14:36:21Z',
      git_url: 'git://github.com/AI-DI/Brancher.git',
      ssh_url: 'git@github.com:AI-DI/Brancher.git',
      clone_url: 'https://github.com/AI-DI/Brancher.git',
      svn_url: 'https://github.com/AI-DI/Brancher',
      homepage: 'https://brancher.org/',
      size: 297938,
      stargazers_count: 203,
      watchers_count: 203,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 30,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 11,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 30,
      open_issues: 11,
      watchers: 203,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 123537609,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjM1Mzc2MDk=',
      name: 'antd-sketchapp',
      full_name: 'ant-design/antd-sketchapp',
      private: false,
      owner: {
        login: 'ant-design',
        id: 12101536,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEyMTAxNTM2',
        avatar_url: 'https://avatars.githubusercontent.com/u/12101536?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ant-design',
        html_url: 'https://github.com/ant-design',
        followers_url: 'https://api.github.com/users/ant-design/followers',
        following_url:
          'https://api.github.com/users/ant-design/following{/other_user}',
        gists_url: 'https://api.github.com/users/ant-design/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ant-design/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ant-design/subscriptions',
        organizations_url: 'https://api.github.com/users/ant-design/orgs',
        repos_url: 'https://api.github.com/users/ant-design/repos',
        events_url: 'https://api.github.com/users/ant-design/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ant-design/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/ant-design/antd-sketchapp',
      description: '⚛️💎🐜 Render Ant Design components to Sketch.',
      fork: false,
      url: 'https://api.github.com/repos/ant-design/antd-sketchapp',
      forks_url: 'https://api.github.com/repos/ant-design/antd-sketchapp/forks',
      keys_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/ant-design/antd-sketchapp/teams',
      hooks_url: 'https://api.github.com/repos/ant-design/antd-sketchapp/hooks',
      issue_events_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/events',
      assignees_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/branches{/branch}',
      tags_url: 'https://api.github.com/repos/ant-design/antd-sketchapp/tags',
      blobs_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/languages',
      stargazers_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/stargazers',
      contributors_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/contributors',
      subscribers_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/subscribers',
      subscription_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/subscription',
      commits_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/merges',
      archive_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/downloads',
      issues_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ant-design/antd-sketchapp/deployments',
      created_at: '2018-03-02T06:03:30Z',
      updated_at: '2022-04-12T09:28:18Z',
      pushed_at: '2021-02-23T10:40:00Z',
      git_url: 'git://github.com/ant-design/antd-sketchapp.git',
      ssh_url: 'git@github.com:ant-design/antd-sketchapp.git',
      clone_url: 'https://github.com/ant-design/antd-sketchapp.git',
      svn_url: 'https://github.com/ant-design/antd-sketchapp',
      homepage: '',
      size: 375,
      stargazers_count: 201,
      watchers_count: 201,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 24,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 12,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['ant-design', 'react', 'sketchapp'],
      visibility: 'public',
      forks: 24,
      open_issues: 12,
      watchers: 201,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 144252737,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDQyNTI3Mzc=',
      name: 'LazyOrgView',
      full_name: 'onlyloveyd/LazyOrgView',
      private: false,
      owner: {
        login: 'onlyloveyd',
        id: 7044935,
        node_id: 'MDQ6VXNlcjcwNDQ5MzU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7044935?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/onlyloveyd',
        html_url: 'https://github.com/onlyloveyd',
        followers_url: 'https://api.github.com/users/onlyloveyd/followers',
        following_url:
          'https://api.github.com/users/onlyloveyd/following{/other_user}',
        gists_url: 'https://api.github.com/users/onlyloveyd/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/onlyloveyd/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/onlyloveyd/subscriptions',
        organizations_url: 'https://api.github.com/users/onlyloveyd/orgs',
        repos_url: 'https://api.github.com/users/onlyloveyd/repos',
        events_url: 'https://api.github.com/users/onlyloveyd/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/onlyloveyd/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/onlyloveyd/LazyOrgView',
      description: '🔥🔥自定义组织机构图 & 层次图🔥🔥',
      fork: false,
      url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView',
      forks_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/forks',
      keys_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/teams',
      hooks_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/hooks',
      issue_events_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/issues/events{/number}',
      events_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/events',
      assignees_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/branches{/branch}',
      tags_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/tags',
      blobs_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/languages',
      stargazers_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/stargazers',
      contributors_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/contributors',
      subscribers_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/subscribers',
      subscription_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/subscription',
      commits_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/onlyloveyd/LazyOrgView/merges',
      archive_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/downloads',
      issues_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/labels{/name}',
      releases_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/onlyloveyd/LazyOrgView/deployments',
      created_at: '2018-08-10T07:30:45Z',
      updated_at: '2023-02-14T02:18:06Z',
      pushed_at: '2020-09-12T09:28:39Z',
      git_url: 'git://github.com/onlyloveyd/LazyOrgView.git',
      ssh_url: 'git@github.com:onlyloveyd/LazyOrgView.git',
      clone_url: 'https://github.com/onlyloveyd/LazyOrgView.git',
      svn_url: 'https://github.com/onlyloveyd/LazyOrgView',
      homepage: '',
      size: 249,
      stargazers_count: 200,
      watchers_count: 200,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 18,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 18,
      open_issues: 0,
      watchers: 200,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 152088502,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTIwODg1MDI=',
      name: 'extra.css',
      full_name: 'una/extra.css',
      private: false,
      owner: {
        login: 'una',
        id: 1693164,
        node_id: 'MDQ6VXNlcjE2OTMxNjQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1693164?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/una',
        html_url: 'https://github.com/una',
        followers_url: 'https://api.github.com/users/una/followers',
        following_url:
          'https://api.github.com/users/una/following{/other_user}',
        gists_url: 'https://api.github.com/users/una/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/una/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/una/subscriptions',
        organizations_url: 'https://api.github.com/users/una/orgs',
        repos_url: 'https://api.github.com/users/una/repos',
        events_url: 'https://api.github.com/users/una/events{/privacy}',
        received_events_url: 'https://api.github.com/users/una/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/una/extra.css',
      description:
        'A CSS Houdini Paint library for those who want to make their sites a little extra  💁🏻‍♀️',
      fork: false,
      url: 'https://api.github.com/repos/una/extra.css',
      forks_url: 'https://api.github.com/repos/una/extra.css/forks',
      keys_url: 'https://api.github.com/repos/una/extra.css/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/una/extra.css/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/una/extra.css/teams',
      hooks_url: 'https://api.github.com/repos/una/extra.css/hooks',
      issue_events_url:
        'https://api.github.com/repos/una/extra.css/issues/events{/number}',
      events_url: 'https://api.github.com/repos/una/extra.css/events',
      assignees_url:
        'https://api.github.com/repos/una/extra.css/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/una/extra.css/branches{/branch}',
      tags_url: 'https://api.github.com/repos/una/extra.css/tags',
      blobs_url: 'https://api.github.com/repos/una/extra.css/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/una/extra.css/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/una/extra.css/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/una/extra.css/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/una/extra.css/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/una/extra.css/languages',
      stargazers_url: 'https://api.github.com/repos/una/extra.css/stargazers',
      contributors_url:
        'https://api.github.com/repos/una/extra.css/contributors',
      subscribers_url: 'https://api.github.com/repos/una/extra.css/subscribers',
      subscription_url:
        'https://api.github.com/repos/una/extra.css/subscription',
      commits_url: 'https://api.github.com/repos/una/extra.css/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/una/extra.css/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/una/extra.css/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/una/extra.css/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/una/extra.css/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/una/extra.css/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/una/extra.css/merges',
      archive_url:
        'https://api.github.com/repos/una/extra.css/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/una/extra.css/downloads',
      issues_url: 'https://api.github.com/repos/una/extra.css/issues{/number}',
      pulls_url: 'https://api.github.com/repos/una/extra.css/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/una/extra.css/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/una/extra.css/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/una/extra.css/labels{/name}',
      releases_url: 'https://api.github.com/repos/una/extra.css/releases{/id}',
      deployments_url: 'https://api.github.com/repos/una/extra.css/deployments',
      created_at: '2018-10-08T13:54:03Z',
      updated_at: '2023-01-23T22:20:45Z',
      pushed_at: '2023-01-04T01:25:24Z',
      git_url: 'git://github.com/una/extra.css.git',
      ssh_url: 'git@github.com:una/extra.css.git',
      clone_url: 'https://github.com/una/extra.css.git',
      svn_url: 'https://github.com/una/extra.css',
      homepage: 'http://extra-css.netlify.com',
      size: 9093,
      stargazers_count: 200,
      watchers_count: 200,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 15,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 31,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 15,
      open_issues: 31,
      watchers: 200,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 176690717,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzY2OTA3MTc=',
      name: 'huawei2019-with-visualization',
      full_name: 'AkatsukiCC/huawei2019-with-visualization',
      private: false,
      owner: {
        login: 'AkatsukiCC',
        id: 37166471,
        node_id: 'MDQ6VXNlcjM3MTY2NDcx',
        avatar_url: 'https://avatars.githubusercontent.com/u/37166471?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/AkatsukiCC',
        html_url: 'https://github.com/AkatsukiCC',
        followers_url: 'https://api.github.com/users/AkatsukiCC/followers',
        following_url:
          'https://api.github.com/users/AkatsukiCC/following{/other_user}',
        gists_url: 'https://api.github.com/users/AkatsukiCC/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/AkatsukiCC/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/AkatsukiCC/subscriptions',
        organizations_url: 'https://api.github.com/users/AkatsukiCC/orgs',
        repos_url: 'https://api.github.com/users/AkatsukiCC/repos',
        events_url: 'https://api.github.com/users/AkatsukiCC/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/AkatsukiCC/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/AkatsukiCC/huawei2019-with-visualization',
      description:
        '华为2019评判器开源(提供可视化接口，方便大家调试自己的判题器)',
      fork: false,
      // url: 'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization',
      forks_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/forks',
      keys_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/teams',
      hooks_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/hooks',
      issue_events_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/events',
      assignees_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/tags',
      blobs_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/languages',
      stargazers_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/stargazers',
      contributors_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/contributors',
      subscribers_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/subscribers',
      subscription_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/subscription',
      commits_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/merges',
      archive_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/downloads',
      issues_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/labels{/name}',
      releases_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/deployments',
      created_at: '2019-03-20T08:41:44Z',
      updated_at: '2022-04-01T08:05:57Z',
      pushed_at: '2019-03-30T08:59:32Z',
      git_url: 'git://github.com/AkatsukiCC/huawei2019-with-visualization.git',
      ssh_url: 'git@github.com:AkatsukiCC/huawei2019-with-visualization.git',
      clone_url:
        'https://github.com/AkatsukiCC/huawei2019-with-visualization.git',
      svn_url: 'https://github.com/AkatsukiCC/huawei2019-with-visualization',
      homepage: '',
      size: 743,
      stargazers_count: 200,
      watchers_count: 200,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 75,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 75,
      open_issues: 1,
      watchers: 200,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 152088502,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTIwODg1MDI=',
      name: 'extra.css',
      full_name: 'una/extra.css',
      private: false,
      owner: {
        login: 'una',
        id: 1693164,
        node_id: 'MDQ6VXNlcjE2OTMxNjQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1693164?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/una',
        html_url: 'https://github.com/una',
        followers_url: 'https://api.github.com/users/una/followers',
        following_url:
          'https://api.github.com/users/una/following{/other_user}',
        gists_url: 'https://api.github.com/users/una/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/una/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/una/subscriptions',
        organizations_url: 'https://api.github.com/users/una/orgs',
        repos_url: 'https://api.github.com/users/una/repos',
        events_url: 'https://api.github.com/users/una/events{/privacy}',
        received_events_url: 'https://api.github.com/users/una/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/una/extra.css',
      description:
        'A CSS Houdini Paint library for those who want to make their sites a little extra  💁🏻‍♀️',
      fork: false,
      url: 'https://api.github.com/repos/una/extra.css',
      forks_url: 'https://api.github.com/repos/una/extra.css/forks',
      keys_url: 'https://api.github.com/repos/una/extra.css/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/una/extra.css/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/una/extra.css/teams',
      hooks_url: 'https://api.github.com/repos/una/extra.css/hooks',
      issue_events_url:
        'https://api.github.com/repos/una/extra.css/issues/events{/number}',
      events_url: 'https://api.github.com/repos/una/extra.css/events',
      assignees_url:
        'https://api.github.com/repos/una/extra.css/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/una/extra.css/branches{/branch}',
      tags_url: 'https://api.github.com/repos/una/extra.css/tags',
      blobs_url: 'https://api.github.com/repos/una/extra.css/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/una/extra.css/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/una/extra.css/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/una/extra.css/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/una/extra.css/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/una/extra.css/languages',
      stargazers_url: 'https://api.github.com/repos/una/extra.css/stargazers',
      contributors_url:
        'https://api.github.com/repos/una/extra.css/contributors',
      subscribers_url: 'https://api.github.com/repos/una/extra.css/subscribers',
      subscription_url:
        'https://api.github.com/repos/una/extra.css/subscription',
      commits_url: 'https://api.github.com/repos/una/extra.css/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/una/extra.css/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/una/extra.css/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/una/extra.css/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/una/extra.css/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/una/extra.css/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/una/extra.css/merges',
      archive_url:
        'https://api.github.com/repos/una/extra.css/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/una/extra.css/downloads',
      issues_url: 'https://api.github.com/repos/una/extra.css/issues{/number}',
      pulls_url: 'https://api.github.com/repos/una/extra.css/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/una/extra.css/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/una/extra.css/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/una/extra.css/labels{/name}',
      releases_url: 'https://api.github.com/repos/una/extra.css/releases{/id}',
      deployments_url: 'https://api.github.com/repos/una/extra.css/deployments',
      created_at: '2018-10-08T13:54:03Z',
      updated_at: '2023-01-23T22:20:45Z',
      pushed_at: '2023-01-04T01:25:24Z',
      git_url: 'git://github.com/una/extra.css.git',
      ssh_url: 'git@github.com:una/extra.css.git',
      clone_url: 'https://github.com/una/extra.css.git',
      svn_url: 'https://github.com/una/extra.css',
      homepage: 'http://extra-css.netlify.com',
      size: 9093,
      stargazers_count: 200,
      watchers_count: 200,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 15,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 31,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 15,
      open_issues: 31,
      watchers: 200,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 176690717,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzY2OTA3MTc=',
      name: 'huawei2019-with-visualization',
      full_name: 'AkatsukiCC/huawei2019-with-visualization',
      private: false,
      owner: {
        login: 'AkatsukiCC',
        id: 37166471,
        node_id: 'MDQ6VXNlcjM3MTY2NDcx',
        avatar_url: 'https://avatars.githubusercontent.com/u/37166471?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/AkatsukiCC',
        html_url: 'https://github.com/AkatsukiCC',
        followers_url: 'https://api.github.com/users/AkatsukiCC/followers',
        following_url:
          'https://api.github.com/users/AkatsukiCC/following{/other_user}',
        gists_url: 'https://api.github.com/users/AkatsukiCC/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/AkatsukiCC/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/AkatsukiCC/subscriptions',
        organizations_url: 'https://api.github.com/users/AkatsukiCC/orgs',
        repos_url: 'https://api.github.com/users/AkatsukiCC/repos',
        events_url: 'https://api.github.com/users/AkatsukiCC/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/AkatsukiCC/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/AkatsukiCC/huawei2019-with-visualization',
      description:
        '华为2019评判器开源(提供可视化接口，方便大家调试自己的判题器)',
      fork: false,
      // url: 'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization',
      forks_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/forks',
      keys_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/teams',
      hooks_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/hooks',
      issue_events_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/events',
      assignees_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/tags',
      blobs_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/languages',
      stargazers_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/stargazers',
      contributors_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/contributors',
      subscribers_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/subscribers',
      subscription_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/subscription',
      commits_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/merges',
      archive_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/downloads',
      issues_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/labels{/name}',
      releases_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/AkatsukiCC/huawei2019-with-visualization/deployments',
      created_at: '2019-03-20T08:41:44Z',
      updated_at: '2022-04-01T08:05:57Z',
      pushed_at: '2019-03-30T08:59:32Z',
      git_url: 'git://github.com/AkatsukiCC/huawei2019-with-visualization.git',
      ssh_url: 'git@github.com:AkatsukiCC/huawei2019-with-visualization.git',
      clone_url:
        'https://github.com/AkatsukiCC/huawei2019-with-visualization.git',
      svn_url: 'https://github.com/AkatsukiCC/huawei2019-with-visualization',
      homepage: '',
      size: 743,
      stargazers_count: 200,
      watchers_count: 200,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 75,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 75,
      open_issues: 1,
      watchers: 200,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 111728435,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTE3Mjg0MzU=',
      name: 'parfit',
      full_name: 'jmcarpenter2/parfit',
      private: false,
      owner: {
        login: 'jmcarpenter2',
        id: 29585347,
        node_id: 'MDQ6VXNlcjI5NTg1MzQ3',
        avatar_url: 'https://avatars.githubusercontent.com/u/29585347?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jmcarpenter2',
        html_url: 'https://github.com/jmcarpenter2',
        followers_url: 'https://api.github.com/users/jmcarpenter2/followers',
        following_url:
          'https://api.github.com/users/jmcarpenter2/following{/other_user}',
        gists_url: 'https://api.github.com/users/jmcarpenter2/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jmcarpenter2/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jmcarpenter2/subscriptions',
        organizations_url: 'https://api.github.com/users/jmcarpenter2/orgs',
        repos_url: 'https://api.github.com/users/jmcarpenter2/repos',
        events_url:
          'https://api.github.com/users/jmcarpenter2/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jmcarpenter2/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/jmcarpenter2/parfit',
      description:
        'A package for parallelizing the fit and flexibly scoring of sklearn machine learning models, with visualization routines.',
      fork: false,
      url: 'https://api.github.com/repos/jmcarpenter2/parfit',
      forks_url: 'https://api.github.com/repos/jmcarpenter2/parfit/forks',
      keys_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/jmcarpenter2/parfit/teams',
      hooks_url: 'https://api.github.com/repos/jmcarpenter2/parfit/hooks',
      issue_events_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/issues/events{/number}',
      events_url: 'https://api.github.com/repos/jmcarpenter2/parfit/events',
      assignees_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/branches{/branch}',
      tags_url: 'https://api.github.com/repos/jmcarpenter2/parfit/tags',
      blobs_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/languages',
      stargazers_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/stargazers',
      contributors_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/contributors',
      subscribers_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/subscribers',
      subscription_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/subscription',
      commits_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/jmcarpenter2/parfit/merges',
      archive_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/downloads',
      issues_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jmcarpenter2/parfit/deployments',
      created_at: '2017-11-22T20:17:51Z',
      updated_at: '2022-11-09T10:19:06Z',
      pushed_at: '2020-04-04T19:26:44Z',
      git_url: 'git://github.com/jmcarpenter2/parfit.git',
      ssh_url: 'git@github.com:jmcarpenter2/parfit.git',
      clone_url: 'https://github.com/jmcarpenter2/parfit.git',
      svn_url: 'https://github.com/jmcarpenter2/parfit',
      homepage: '',
      size: 1608,
      stargazers_count: 199,
      watchers_count: 199,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 30,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 7,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 30,
      open_issues: 7,
      watchers: 199,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 191633724,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTE2MzM3MjQ=',
      name: 'template-electron-installation',
      full_name: 'mattdesl/template-electron-installation',
      private: false,
      owner: {
        login: 'mattdesl',
        id: 1383811,
        node_id: 'MDQ6VXNlcjEzODM4MTE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1383811?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mattdesl',
        html_url: 'https://github.com/mattdesl',
        followers_url: 'https://api.github.com/users/mattdesl/followers',
        following_url:
          'https://api.github.com/users/mattdesl/following{/other_user}',
        gists_url: 'https://api.github.com/users/mattdesl/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/mattdesl/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/mattdesl/subscriptions',
        organizations_url: 'https://api.github.com/users/mattdesl/orgs',
        repos_url: 'https://api.github.com/users/mattdesl/repos',
        events_url: 'https://api.github.com/users/mattdesl/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/mattdesl/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/mattdesl/template-electron-installation',
      description:
        'a template for media art installations using Electron in kiosk mode',
      fork: false,
      // url: 'https://api.github.com/repos/mattdesl/template-electron-installation',
      forks_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/forks',
      keys_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/teams',
      hooks_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/hooks',
      issue_events_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/events',
      assignees_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/tags',
      blobs_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/languages',
      stargazers_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/stargazers',
      contributors_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/contributors',
      subscribers_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/subscribers',
      subscription_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/subscription',
      commits_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/merges',
      archive_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/downloads',
      issues_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/labels{/name}',
      releases_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/mattdesl/template-electron-installation/deployments',
      created_at: '2019-06-12T19:39:39Z',
      updated_at: '2022-07-13T21:59:29Z',
      pushed_at: '2022-12-09T06:08:04Z',
      git_url: 'git://github.com/mattdesl/template-electron-installation.git',
      ssh_url: 'git@github.com:mattdesl/template-electron-installation.git',
      clone_url:
        'https://github.com/mattdesl/template-electron-installation.git',
      svn_url: 'https://github.com/mattdesl/template-electron-installation',
      homepage: '',
      size: 304,
      stargazers_count: 199,
      watchers_count: 199,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 11,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 10,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 11,
      open_issues: 10,
      watchers: 199,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 184001847,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODQwMDE4NDc=',
      name: 'swift-enum-properties',
      full_name: 'pointfreeco/swift-enum-properties',
      private: false,
      owner: {
        login: 'pointfreeco',
        id: 29466629,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI5NDY2NjI5',
        avatar_url: 'https://avatars.githubusercontent.com/u/29466629?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/pointfreeco',
        html_url: 'https://github.com/pointfreeco',
        followers_url: 'https://api.github.com/users/pointfreeco/followers',
        following_url:
          'https://api.github.com/users/pointfreeco/following{/other_user}',
        gists_url: 'https://api.github.com/users/pointfreeco/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/pointfreeco/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/pointfreeco/subscriptions',
        organizations_url: 'https://api.github.com/users/pointfreeco/orgs',
        repos_url: 'https://api.github.com/users/pointfreeco/repos',
        events_url: 'https://api.github.com/users/pointfreeco/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/pointfreeco/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/pointfreeco/swift-enum-properties',
      description: '🤝 Struct and enum data access in harmony.',
      fork: false,
      url: 'https://api.github.com/repos/pointfreeco/swift-enum-properties',
      forks_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/forks',
      keys_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/teams',
      hooks_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/hooks',
      issue_events_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/events',
      assignees_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/tags',
      blobs_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/languages',
      stargazers_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/stargazers',
      contributors_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/contributors',
      subscribers_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/subscribers',
      subscription_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/subscription',
      commits_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/merges',
      archive_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/downloads',
      issues_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/labels{/name}',
      releases_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/pointfreeco/swift-enum-properties/deployments',
      created_at: '2019-04-29T04:53:33Z',
      updated_at: '2023-02-15T17:33:41Z',
      pushed_at: '2021-08-17T19:52:01Z',
      git_url: 'git://github.com/pointfreeco/swift-enum-properties.git',
      ssh_url: 'git@github.com:pointfreeco/swift-enum-properties.git',
      clone_url: 'https://github.com/pointfreeco/swift-enum-properties.git',
      svn_url: 'https://github.com/pointfreeco/swift-enum-properties',
      homepage: 'https://www.pointfree.co/episodes/ep52-enum-properties',
      size: 56,
      stargazers_count: 199,
      watchers_count: 199,
      language: 'Swift',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 10,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['algebraic-data-types', 'code-generation'],
      visibility: 'public',
      forks: 10,
      open_issues: 0,
      watchers: 199,
      default_branch: 'main',
      score: 1.0,
    },
    {
      id: 151188469,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTExODg0Njk=',
      name: 'NLP-Exercises',
      full_name: 'udacity/NLP-Exercises',
      private: false,
      owner: {
        login: 'udacity',
        id: 1916665,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE5MTY2NjU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1916665?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/udacity',
        html_url: 'https://github.com/udacity',
        followers_url: 'https://api.github.com/users/udacity/followers',
        following_url:
          'https://api.github.com/users/udacity/following{/other_user}',
        gists_url: 'https://api.github.com/users/udacity/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/udacity/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/udacity/subscriptions',
        organizations_url: 'https://api.github.com/users/udacity/orgs',
        repos_url: 'https://api.github.com/users/udacity/repos',
        events_url: 'https://api.github.com/users/udacity/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/udacity/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/udacity/NLP-Exercises',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/udacity/NLP-Exercises',
      forks_url: 'https://api.github.com/repos/udacity/NLP-Exercises/forks',
      keys_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/udacity/NLP-Exercises/teams',
      hooks_url: 'https://api.github.com/repos/udacity/NLP-Exercises/hooks',
      issue_events_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/issues/events{/number}',
      events_url: 'https://api.github.com/repos/udacity/NLP-Exercises/events',
      assignees_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/branches{/branch}',
      tags_url: 'https://api.github.com/repos/udacity/NLP-Exercises/tags',
      blobs_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/languages',
      stargazers_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/stargazers',
      contributors_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/contributors',
      subscribers_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/subscribers',
      subscription_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/subscription',
      commits_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/udacity/NLP-Exercises/merges',
      archive_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/downloads',
      issues_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/labels{/name}',
      releases_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/udacity/NLP-Exercises/deployments',
      created_at: '2018-10-02T02:11:08Z',
      updated_at: '2023-02-15T04:30:12Z',
      pushed_at: '2022-06-27T12:19:22Z',
      git_url: 'git://github.com/udacity/NLP-Exercises.git',
      ssh_url: 'git@github.com:udacity/NLP-Exercises.git',
      clone_url: 'https://github.com/udacity/NLP-Exercises.git',
      svn_url: 'https://github.com/udacity/NLP-Exercises',
      homepage: null,
      size: 19624,
      stargazers_count: 198,
      watchers_count: 198,
      language: 'Jupyter Notebook',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 341,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 2,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 341,
      open_issues: 2,
      watchers: 198,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 152538395,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTI1MzgzOTU=',
      name: 'react-native-fluidic-slider',
      full_name: 'prscX/react-native-fluidic-slider',
      private: false,
      owner: {
        login: 'prscX',
        id: 28862892,
        node_id: 'MDQ6VXNlcjI4ODYyODky',
        avatar_url: 'https://avatars.githubusercontent.com/u/28862892?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/prscX',
        html_url: 'https://github.com/prscX',
        followers_url: 'https://api.github.com/users/prscX/followers',
        following_url:
          'https://api.github.com/users/prscX/following{/other_user}',
        gists_url: 'https://api.github.com/users/prscX/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/prscX/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/prscX/subscriptions',
        organizations_url: 'https://api.github.com/users/prscX/orgs',
        repos_url: 'https://api.github.com/users/prscX/repos',
        events_url: 'https://api.github.com/users/prscX/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/prscX/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/prscX/react-native-fluidic-slider',
      description: 'React Native: Native Fluidic Slider',
      fork: false,
      url: 'https://api.github.com/repos/prscX/react-native-fluidic-slider',
      forks_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/forks',
      keys_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/teams',
      hooks_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/hooks',
      issue_events_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/events',
      assignees_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/tags',
      blobs_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/languages',
      stargazers_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/stargazers',
      contributors_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/contributors',
      subscribers_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/subscribers',
      subscription_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/subscription',
      commits_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/merges',
      archive_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/downloads',
      issues_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/labels{/name}',
      releases_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/prscX/react-native-fluidic-slider/deployments',
      created_at: '2018-10-11T05:57:29Z',
      updated_at: '2023-02-18T23:58:07Z',
      pushed_at: '2021-07-03T10:05:15Z',
      git_url: 'git://github.com/prscX/react-native-fluidic-slider.git',
      ssh_url: 'git@github.com:prscX/react-native-fluidic-slider.git',
      clone_url: 'https://github.com/prscX/react-native-fluidic-slider.git',
      svn_url: 'https://github.com/prscX/react-native-fluidic-slider',
      homepage: '',
      size: 511,
      stargazers_count: 198,
      watchers_count: 198,
      language: 'Objective-C',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 19,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 16,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['android', 'ios', 'react-native'],
      visibility: 'public',
      forks: 19,
      open_issues: 16,
      watchers: 198,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 154893096,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTQ4OTMwOTY=',
      name: 'hooks-test',
      full_name: 'jacobp100/hooks-test',
      private: false,
      owner: {
        login: 'jacobp100',
        id: 7275322,
        node_id: 'MDQ6VXNlcjcyNzUzMjI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7275322?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jacobp100',
        html_url: 'https://github.com/jacobp100',
        followers_url: 'https://api.github.com/users/jacobp100/followers',
        following_url:
          'https://api.github.com/users/jacobp100/following{/other_user}',
        gists_url: 'https://api.github.com/users/jacobp100/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jacobp100/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jacobp100/subscriptions',
        organizations_url: 'https://api.github.com/users/jacobp100/orgs',
        repos_url: 'https://api.github.com/users/jacobp100/repos',
        events_url: 'https://api.github.com/users/jacobp100/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jacobp100/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/jacobp100/hooks-test',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/jacobp100/hooks-test',
      forks_url: 'https://api.github.com/repos/jacobp100/hooks-test/forks',
      keys_url:
        'https://api.github.com/repos/jacobp100/hooks-test/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jacobp100/hooks-test/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/jacobp100/hooks-test/teams',
      hooks_url: 'https://api.github.com/repos/jacobp100/hooks-test/hooks',
      issue_events_url:
        'https://api.github.com/repos/jacobp100/hooks-test/issues/events{/number}',
      events_url: 'https://api.github.com/repos/jacobp100/hooks-test/events',
      assignees_url:
        'https://api.github.com/repos/jacobp100/hooks-test/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jacobp100/hooks-test/branches{/branch}',
      tags_url: 'https://api.github.com/repos/jacobp100/hooks-test/tags',
      blobs_url:
        'https://api.github.com/repos/jacobp100/hooks-test/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jacobp100/hooks-test/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jacobp100/hooks-test/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jacobp100/hooks-test/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jacobp100/hooks-test/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/jacobp100/hooks-test/languages',
      stargazers_url:
        'https://api.github.com/repos/jacobp100/hooks-test/stargazers',
      contributors_url:
        'https://api.github.com/repos/jacobp100/hooks-test/contributors',
      subscribers_url:
        'https://api.github.com/repos/jacobp100/hooks-test/subscribers',
      subscription_url:
        'https://api.github.com/repos/jacobp100/hooks-test/subscription',
      commits_url:
        'https://api.github.com/repos/jacobp100/hooks-test/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jacobp100/hooks-test/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jacobp100/hooks-test/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jacobp100/hooks-test/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jacobp100/hooks-test/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jacobp100/hooks-test/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/jacobp100/hooks-test/merges',
      archive_url:
        'https://api.github.com/repos/jacobp100/hooks-test/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/jacobp100/hooks-test/downloads',
      issues_url:
        'https://api.github.com/repos/jacobp100/hooks-test/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jacobp100/hooks-test/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jacobp100/hooks-test/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jacobp100/hooks-test/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jacobp100/hooks-test/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jacobp100/hooks-test/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jacobp100/hooks-test/deployments',
      created_at: '2018-10-26T20:51:29Z',
      updated_at: '2023-02-04T06:40:57Z',
      pushed_at: '2023-02-27T19:28:10Z',
      git_url: 'git://github.com/jacobp100/hooks-test.git',
      ssh_url: 'git@github.com:jacobp100/hooks-test.git',
      clone_url: 'https://github.com/jacobp100/hooks-test.git',
      svn_url: 'https://github.com/jacobp100/hooks-test',
      homepage: null,
      size: 2570,
      stargazers_count: 198,
      watchers_count: 198,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 11,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 5,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 11,
      open_issues: 5,
      watchers: 198,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 122577034,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjI1NzcwMzQ=',
      name: 'xian',
      full_name: 'xiancloud/xian',
      private: false,
      owner: {
        login: 'xiancloud',
        id: 37145971,
        node_id: 'MDQ6VXNlcjM3MTQ1OTcx',
        avatar_url: 'https://avatars.githubusercontent.com/u/37145971?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/xiancloud',
        html_url: 'https://github.com/xiancloud',
        followers_url: 'https://api.github.com/users/xiancloud/followers',
        following_url:
          'https://api.github.com/users/xiancloud/following{/other_user}',
        gists_url: 'https://api.github.com/users/xiancloud/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/xiancloud/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/xiancloud/subscriptions',
        organizations_url: 'https://api.github.com/users/xiancloud/orgs',
        repos_url: 'https://api.github.com/users/xiancloud/repos',
        events_url: 'https://api.github.com/users/xiancloud/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/xiancloud/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/xiancloud/xian',
      description: 'reactive风格的微服务框架',
      fork: false,
      url: 'https://api.github.com/repos/xiancloud/xian',
      forks_url: 'https://api.github.com/repos/xiancloud/xian/forks',
      keys_url: 'https://api.github.com/repos/xiancloud/xian/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/xiancloud/xian/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/xiancloud/xian/teams',
      hooks_url: 'https://api.github.com/repos/xiancloud/xian/hooks',
      issue_events_url:
        'https://api.github.com/repos/xiancloud/xian/issues/events{/number}',
      events_url: 'https://api.github.com/repos/xiancloud/xian/events',
      assignees_url:
        'https://api.github.com/repos/xiancloud/xian/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/xiancloud/xian/branches{/branch}',
      tags_url: 'https://api.github.com/repos/xiancloud/xian/tags',
      blobs_url: 'https://api.github.com/repos/xiancloud/xian/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/xiancloud/xian/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/xiancloud/xian/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/xiancloud/xian/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/xiancloud/xian/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/xiancloud/xian/languages',
      stargazers_url: 'https://api.github.com/repos/xiancloud/xian/stargazers',
      contributors_url:
        'https://api.github.com/repos/xiancloud/xian/contributors',
      subscribers_url:
        'https://api.github.com/repos/xiancloud/xian/subscribers',
      subscription_url:
        'https://api.github.com/repos/xiancloud/xian/subscription',
      commits_url: 'https://api.github.com/repos/xiancloud/xian/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/xiancloud/xian/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/xiancloud/xian/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/xiancloud/xian/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/xiancloud/xian/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/xiancloud/xian/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/xiancloud/xian/merges',
      archive_url:
        'https://api.github.com/repos/xiancloud/xian/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/xiancloud/xian/downloads',
      issues_url: 'https://api.github.com/repos/xiancloud/xian/issues{/number}',
      pulls_url: 'https://api.github.com/repos/xiancloud/xian/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/xiancloud/xian/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/xiancloud/xian/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/xiancloud/xian/labels{/name}',
      releases_url: 'https://api.github.com/repos/xiancloud/xian/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/xiancloud/xian/deployments',
      created_at: '2018-02-23T05:23:11Z',
      updated_at: '2022-11-23T08:16:17Z',
      pushed_at: '2020-04-14T00:22:41Z',
      git_url: 'git://github.com/xiancloud/xian.git',
      ssh_url: 'git@github.com:xiancloud/xian.git',
      clone_url: 'https://github.com/xiancloud/xian.git',
      svn_url: 'https://github.com/xiancloud/xian',
      homepage: '',
      size: 4115,
      stargazers_count: 197,
      watchers_count: 197,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 49,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 26,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'actor-model',
        'devops',
        'gateway',
        'gradle',
        'java',
        'microservices',
        'reactive',
        'rpc',
        'rxjava2',
        'xian',
      ],
      visibility: 'public',
      forks: 49,
      open_issues: 26,
      watchers: 197,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 134978929,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ5Nzg5Mjk=',
      name: 'spring-cloud-components',
      full_name: 'shmilyah/spring-cloud-components',
      private: false,
      owner: {
        login: 'shmilyah',
        id: 19623865,
        node_id: 'MDQ6VXNlcjE5NjIzODY1',
        avatar_url: 'https://avatars.githubusercontent.com/u/19623865?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/shmilyah',
        html_url: 'https://github.com/shmilyah',
        followers_url: 'https://api.github.com/users/shmilyah/followers',
        following_url:
          'https://api.github.com/users/shmilyah/following{/other_user}',
        gists_url: 'https://api.github.com/users/shmilyah/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/shmilyah/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/shmilyah/subscriptions',
        organizations_url: 'https://api.github.com/users/shmilyah/orgs',
        repos_url: 'https://api.github.com/users/shmilyah/repos',
        events_url: 'https://api.github.com/users/shmilyah/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/shmilyah/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/shmilyah/spring-cloud-components',
      description:
        '基于 Spring Cloud 组件构建的分布式服务架构 ( Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems ) ',
      fork: false,
      url: 'https://api.github.com/repos/shmilyah/spring-cloud-components',
      forks_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/forks',
      keys_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/teams',
      hooks_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/hooks',
      issue_events_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/events',
      assignees_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/tags',
      blobs_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/languages',
      stargazers_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/stargazers',
      contributors_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/contributors',
      subscribers_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/subscribers',
      subscription_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/subscription',
      commits_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/merges',
      archive_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/downloads',
      issues_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/labels{/name}',
      releases_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/shmilyah/spring-cloud-components/deployments',
      created_at: '2018-05-26T16:49:58Z',
      updated_at: '2022-07-14T05:42:24Z',
      pushed_at: '2021-09-14T11:36:15Z',
      git_url: 'git://github.com/shmilyah/spring-cloud-components.git',
      ssh_url: 'git@github.com:shmilyah/spring-cloud-components.git',
      clone_url: 'https://github.com/shmilyah/spring-cloud-components.git',
      svn_url: 'https://github.com/shmilyah/spring-cloud-components',
      homepage: '',
      size: 112,
      stargazers_count: 196,
      watchers_count: 196,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 130,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 130,
      open_issues: 1,
      watchers: 196,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 110488009,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTA0ODgwMDk=',
      name: 'ConductorMVP',
      full_name: 'jshvarts/ConductorMVP',
      private: false,
      owner: {
        login: 'jshvarts',
        id: 5749794,
        node_id: 'MDQ6VXNlcjU3NDk3OTQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/5749794?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jshvarts',
        html_url: 'https://github.com/jshvarts',
        followers_url: 'https://api.github.com/users/jshvarts/followers',
        following_url:
          'https://api.github.com/users/jshvarts/following{/other_user}',
        gists_url: 'https://api.github.com/users/jshvarts/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jshvarts/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jshvarts/subscriptions',
        organizations_url: 'https://api.github.com/users/jshvarts/orgs',
        repos_url: 'https://api.github.com/users/jshvarts/repos',
        events_url: 'https://api.github.com/users/jshvarts/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jshvarts/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/jshvarts/ConductorMVP',
      description:
        'Multi-project Clean Architecture MVP app in Kotlin using Conductor, Room, RxJava 2, Dagger 2 with custom scopes',
      fork: false,
      url: 'https://api.github.com/repos/jshvarts/ConductorMVP',
      forks_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/forks',
      keys_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/teams',
      hooks_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/hooks',
      issue_events_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/issues/events{/number}',
      events_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/events',
      assignees_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/branches{/branch}',
      tags_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/tags',
      blobs_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/languages',
      stargazers_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/stargazers',
      contributors_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/contributors',
      subscribers_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/subscribers',
      subscription_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/subscription',
      commits_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/jshvarts/ConductorMVP/merges',
      archive_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/downloads',
      issues_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jshvarts/ConductorMVP/deployments',
      created_at: '2017-11-13T02:00:33Z',
      updated_at: '2023-02-15T18:19:44Z',
      pushed_at: '2018-01-13T22:10:02Z',
      git_url: 'git://github.com/jshvarts/ConductorMVP.git',
      ssh_url: 'git@github.com:jshvarts/ConductorMVP.git',
      clone_url: 'https://github.com/jshvarts/ConductorMVP.git',
      svn_url: 'https://github.com/jshvarts/ConductorMVP',
      homepage: '',
      size: 377,
      stargazers_count: 196,
      watchers_count: 196,
      language: 'Kotlin',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 32,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'butterknife',
        'conductor',
        'dagger-2',
        'dagger2-mvp',
        'kotlin-android',
        'multi-project',
        'mvp-android',
        'room',
        'room-persistence-library',
        'rxandroid',
        'rxjava2',
      ],
      visibility: 'public',
      forks: 32,
      open_issues: 1,
      watchers: 196,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 115219395,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTUyMTkzOTU=',
      name: 'angular-online-judge',
      full_name: 'sugarac/angular-online-judge',
      private: false,
      owner: {
        login: 'sugarac',
        id: 32947977,
        node_id: 'MDQ6VXNlcjMyOTQ3OTc3',
        avatar_url: 'https://avatars.githubusercontent.com/u/32947977?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/sugarac',
        html_url: 'https://github.com/sugarac',
        followers_url: 'https://api.github.com/users/sugarac/followers',
        following_url:
          'https://api.github.com/users/sugarac/following{/other_user}',
        gists_url: 'https://api.github.com/users/sugarac/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/sugarac/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/sugarac/subscriptions',
        organizations_url: 'https://api.github.com/users/sugarac/orgs',
        repos_url: 'https://api.github.com/users/sugarac/repos',
        events_url: 'https://api.github.com/users/sugarac/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/sugarac/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/sugarac/angular-online-judge',
      description: 'A mini LeetCode with the collaborative feature.',
      fork: false,
      url: 'https://api.github.com/repos/sugarac/angular-online-judge',
      forks_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/forks',
      keys_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/teams',
      hooks_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/hooks',
      issue_events_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/events',
      assignees_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/tags',
      blobs_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/languages',
      stargazers_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/stargazers',
      contributors_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/contributors',
      subscribers_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/subscribers',
      subscription_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/subscription',
      commits_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/merges',
      archive_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/downloads',
      issues_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/labels{/name}',
      releases_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/sugarac/angular-online-judge/deployments',
      created_at: '2017-12-23T20:13:16Z',
      updated_at: '2022-12-16T07:39:00Z',
      pushed_at: '2018-01-13T04:56:35Z',
      git_url: 'git://github.com/sugarac/angular-online-judge.git',
      ssh_url: 'git@github.com:sugarac/angular-online-judge.git',
      clone_url: 'https://github.com/sugarac/angular-online-judge.git',
      svn_url: 'https://github.com/sugarac/angular-online-judge',
      homepage: '',
      size: 803,
      stargazers_count: 195,
      watchers_count: 195,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 76,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 76,
      open_issues: 0,
      watchers: 195,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 157831767,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTc4MzE3Njc=',
      name: 'ng-china-2018',
      full_name: 'ngChina/ng-china-2018',
      private: false,
      owner: {
        login: 'ngChina',
        id: 45090726,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ1MDkwNzI2',
        avatar_url: 'https://avatars.githubusercontent.com/u/45090726?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ngChina',
        html_url: 'https://github.com/ngChina',
        followers_url: 'https://api.github.com/users/ngChina/followers',
        following_url:
          'https://api.github.com/users/ngChina/following{/other_user}',
        gists_url: 'https://api.github.com/users/ngChina/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ngChina/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ngChina/subscriptions',
        organizations_url: 'https://api.github.com/users/ngChina/orgs',
        repos_url: 'https://api.github.com/users/ngChina/repos',
        events_url: 'https://api.github.com/users/ngChina/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ngChina/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/ngChina/ng-china-2018',
      description: '2018 ngChina 开发者大会',
      fork: false,
      url: 'https://api.github.com/repos/ngChina/ng-china-2018',
      forks_url: 'https://api.github.com/repos/ngChina/ng-china-2018/forks',
      keys_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/ngChina/ng-china-2018/teams',
      hooks_url: 'https://api.github.com/repos/ngChina/ng-china-2018/hooks',
      issue_events_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/issues/events{/number}',
      events_url: 'https://api.github.com/repos/ngChina/ng-china-2018/events',
      assignees_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/branches{/branch}',
      tags_url: 'https://api.github.com/repos/ngChina/ng-china-2018/tags',
      blobs_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/languages',
      stargazers_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/stargazers',
      contributors_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/contributors',
      subscribers_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/subscribers',
      subscription_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/subscription',
      commits_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/ngChina/ng-china-2018/merges',
      archive_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/downloads',
      issues_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ngChina/ng-china-2018/deployments',
      created_at: '2018-11-16T07:50:11Z',
      updated_at: '2023-02-17T13:09:24Z',
      pushed_at: '2019-01-09T17:26:01Z',
      git_url: 'git://github.com/ngChina/ng-china-2018.git',
      ssh_url: 'git@github.com:ngChina/ng-china-2018.git',
      clone_url: 'https://github.com/ngChina/ng-china-2018.git',
      svn_url: 'https://github.com/ngChina/ng-china-2018',
      homepage: 'https://ng-china.org',
      size: 64460,
      stargazers_count: 194,
      watchers_count: 194,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 43,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 43,
      open_issues: 0,
      watchers: 194,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 135020912,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzUwMjA5MTI=',
      name: 'WYBasisKit',
      full_name: 'Jacke-xu/WYBasisKit',
      private: false,
      owner: {
        login: 'Jacke-xu',
        id: 15990983,
        node_id: 'MDQ6VXNlcjE1OTkwOTgz',
        avatar_url: 'https://avatars.githubusercontent.com/u/15990983?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Jacke-xu',
        html_url: 'https://github.com/Jacke-xu',
        followers_url: 'https://api.github.com/users/Jacke-xu/followers',
        following_url:
          'https://api.github.com/users/Jacke-xu/following{/other_user}',
        gists_url: 'https://api.github.com/users/Jacke-xu/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Jacke-xu/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Jacke-xu/subscriptions',
        organizations_url: 'https://api.github.com/users/Jacke-xu/orgs',
        repos_url: 'https://api.github.com/users/Jacke-xu/repos',
        events_url: 'https://api.github.com/users/Jacke-xu/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Jacke-xu/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Jacke-xu/WYBasisKit',
      description:
        '"WYBasisKit" is a toolkit aimed at greatly improving efficiency.',
      fork: false,
      url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit',
      forks_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/forks',
      keys_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/teams',
      hooks_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/hooks',
      issue_events_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/events',
      assignees_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/tags',
      blobs_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/languages',
      stargazers_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/stargazers',
      contributors_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/contributors',
      subscribers_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/subscribers',
      subscription_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/subscription',
      commits_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Jacke-xu/WYBasisKit/merges',
      archive_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/downloads',
      issues_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Jacke-xu/WYBasisKit/deployments',
      created_at: '2018-05-27T06:18:20Z',
      updated_at: '2021-10-25T03:52:02Z',
      pushed_at: '2021-09-16T05:32:32Z',
      git_url: 'git://github.com/Jacke-xu/WYBasisKit.git',
      ssh_url: 'git@github.com:Jacke-xu/WYBasisKit.git',
      clone_url: 'https://github.com/Jacke-xu/WYBasisKit.git',
      svn_url: 'https://github.com/Jacke-xu/WYBasisKit',
      homepage: '',
      size: 79938,
      stargazers_count: 193,
      watchers_count: 193,
      language: 'Objective-C',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 37,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 2,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 37,
      open_issues: 2,
      watchers: 193,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 146989451,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDY5ODk0NTE=',
      name: 'LeetCode',
      full_name: '617076674/LeetCode',
      private: false,
      owner: {
        login: '617076674',
        id: 42443276,
        node_id: 'MDQ6VXNlcjQyNDQzMjc2',
        avatar_url: 'https://avatars.githubusercontent.com/u/42443276?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/617076674',
        html_url: 'https://github.com/617076674',
        followers_url: 'https://api.github.com/users/617076674/followers',
        following_url:
          'https://api.github.com/users/617076674/following{/other_user}',
        gists_url: 'https://api.github.com/users/617076674/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/617076674/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/617076674/subscriptions',
        organizations_url: 'https://api.github.com/users/617076674/orgs',
        repos_url: 'https://api.github.com/users/617076674/repos',
        events_url: 'https://api.github.com/users/617076674/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/617076674/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/617076674/LeetCode',
      description: '我的LeetCode代码仓，近乎所有题目都会提供多种解法  :)',
      fork: false,
      url: 'https://api.github.com/repos/617076674/LeetCode',
      forks_url: 'https://api.github.com/repos/617076674/LeetCode/forks',
      keys_url: 'https://api.github.com/repos/617076674/LeetCode/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/617076674/LeetCode/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/617076674/LeetCode/teams',
      hooks_url: 'https://api.github.com/repos/617076674/LeetCode/hooks',
      issue_events_url:
        'https://api.github.com/repos/617076674/LeetCode/issues/events{/number}',
      events_url: 'https://api.github.com/repos/617076674/LeetCode/events',
      assignees_url:
        'https://api.github.com/repos/617076674/LeetCode/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/617076674/LeetCode/branches{/branch}',
      tags_url: 'https://api.github.com/repos/617076674/LeetCode/tags',
      blobs_url:
        'https://api.github.com/repos/617076674/LeetCode/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/617076674/LeetCode/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/617076674/LeetCode/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/617076674/LeetCode/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/617076674/LeetCode/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/617076674/LeetCode/languages',
      stargazers_url:
        'https://api.github.com/repos/617076674/LeetCode/stargazers',
      contributors_url:
        'https://api.github.com/repos/617076674/LeetCode/contributors',
      subscribers_url:
        'https://api.github.com/repos/617076674/LeetCode/subscribers',
      subscription_url:
        'https://api.github.com/repos/617076674/LeetCode/subscription',
      commits_url:
        'https://api.github.com/repos/617076674/LeetCode/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/617076674/LeetCode/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/617076674/LeetCode/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/617076674/LeetCode/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/617076674/LeetCode/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/617076674/LeetCode/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/617076674/LeetCode/merges',
      archive_url:
        'https://api.github.com/repos/617076674/LeetCode/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/617076674/LeetCode/downloads',
      issues_url:
        'https://api.github.com/repos/617076674/LeetCode/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/617076674/LeetCode/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/617076674/LeetCode/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/617076674/LeetCode/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/617076674/LeetCode/labels{/name}',
      releases_url:
        'https://api.github.com/repos/617076674/LeetCode/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/617076674/LeetCode/deployments',
      created_at: '2018-09-01T10:33:06Z',
      updated_at: '2022-11-21T13:39:11Z',
      pushed_at: '2022-04-13T01:03:34Z',
      git_url: 'git://github.com/617076674/LeetCode.git',
      ssh_url: 'git@github.com:617076674/LeetCode.git',
      clone_url: 'https://github.com/617076674/LeetCode.git',
      svn_url: 'https://github.com/617076674/LeetCode',
      homepage: '',
      size: 14375,
      stargazers_count: 192,
      watchers_count: 192,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 48,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['leetcode'],
      visibility: 'public',
      forks: 48,
      open_issues: 1,
      watchers: 192,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 138739777,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzg3Mzk3Nzc=',
      name: 'tf-gqn',
      full_name: 'ogroth/tf-gqn',
      private: false,
      owner: {
        login: 'ogroth',
        id: 11842899,
        node_id: 'MDQ6VXNlcjExODQyODk5',
        avatar_url: 'https://avatars.githubusercontent.com/u/11842899?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ogroth',
        html_url: 'https://github.com/ogroth',
        followers_url: 'https://api.github.com/users/ogroth/followers',
        following_url:
          'https://api.github.com/users/ogroth/following{/other_user}',
        gists_url: 'https://api.github.com/users/ogroth/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ogroth/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ogroth/subscriptions',
        organizations_url: 'https://api.github.com/users/ogroth/orgs',
        repos_url: 'https://api.github.com/users/ogroth/repos',
        events_url: 'https://api.github.com/users/ogroth/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ogroth/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ogroth/tf-gqn',
      description:
        'Tensorflow implementation of Neural Scene Representation and Rendering',
      fork: false,
      url: 'https://api.github.com/repos/ogroth/tf-gqn',
      forks_url: 'https://api.github.com/repos/ogroth/tf-gqn/forks',
      keys_url: 'https://api.github.com/repos/ogroth/tf-gqn/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ogroth/tf-gqn/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/ogroth/tf-gqn/teams',
      hooks_url: 'https://api.github.com/repos/ogroth/tf-gqn/hooks',
      issue_events_url:
        'https://api.github.com/repos/ogroth/tf-gqn/issues/events{/number}',
      events_url: 'https://api.github.com/repos/ogroth/tf-gqn/events',
      assignees_url:
        'https://api.github.com/repos/ogroth/tf-gqn/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ogroth/tf-gqn/branches{/branch}',
      tags_url: 'https://api.github.com/repos/ogroth/tf-gqn/tags',
      blobs_url: 'https://api.github.com/repos/ogroth/tf-gqn/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/ogroth/tf-gqn/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/ogroth/tf-gqn/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/ogroth/tf-gqn/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/ogroth/tf-gqn/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/ogroth/tf-gqn/languages',
      stargazers_url: 'https://api.github.com/repos/ogroth/tf-gqn/stargazers',
      contributors_url:
        'https://api.github.com/repos/ogroth/tf-gqn/contributors',
      subscribers_url: 'https://api.github.com/repos/ogroth/tf-gqn/subscribers',
      subscription_url:
        'https://api.github.com/repos/ogroth/tf-gqn/subscription',
      commits_url: 'https://api.github.com/repos/ogroth/tf-gqn/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ogroth/tf-gqn/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ogroth/tf-gqn/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ogroth/tf-gqn/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ogroth/tf-gqn/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ogroth/tf-gqn/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/ogroth/tf-gqn/merges',
      archive_url:
        'https://api.github.com/repos/ogroth/tf-gqn/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/ogroth/tf-gqn/downloads',
      issues_url: 'https://api.github.com/repos/ogroth/tf-gqn/issues{/number}',
      pulls_url: 'https://api.github.com/repos/ogroth/tf-gqn/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ogroth/tf-gqn/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ogroth/tf-gqn/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/ogroth/tf-gqn/labels{/name}',
      releases_url: 'https://api.github.com/repos/ogroth/tf-gqn/releases{/id}',
      deployments_url: 'https://api.github.com/repos/ogroth/tf-gqn/deployments',
      created_at: '2018-06-26T13:09:38Z',
      updated_at: '2023-01-04T12:11:02Z',
      pushed_at: '2023-02-02T06:24:26Z',
      git_url: 'git://github.com/ogroth/tf-gqn.git',
      ssh_url: 'git@github.com:ogroth/tf-gqn.git',
      clone_url: 'https://github.com/ogroth/tf-gqn.git',
      svn_url: 'https://github.com/ogroth/tf-gqn',
      homepage: null,
      size: 7573,
      stargazers_count: 189,
      watchers_count: 189,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 36,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 23,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'gqn-datasets',
        'neural-processes',
        'paper-implementations',
        'view-synthesis',
      ],
      visibility: 'public',
      forks: 36,
      open_issues: 23,
      watchers: 189,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 124845296,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjQ4NDUyOTY=',
      name: 'vue-webpack-todoapp',
      full_name: 'XPoet/vue-webpack-todoapp',
      private: false,
      owner: {
        login: 'XPoet',
        id: 24516169,
        node_id: 'MDQ6VXNlcjI0NTE2MTY5',
        avatar_url: 'https://avatars.githubusercontent.com/u/24516169?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/XPoet',
        html_url: 'https://github.com/XPoet',
        followers_url: 'https://api.github.com/users/XPoet/followers',
        following_url:
          'https://api.github.com/users/XPoet/following{/other_user}',
        gists_url: 'https://api.github.com/users/XPoet/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/XPoet/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/XPoet/subscriptions',
        organizations_url: 'https://api.github.com/users/XPoet/orgs',
        repos_url: 'https://api.github.com/users/XPoet/repos',
        events_url: 'https://api.github.com/users/XPoet/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/XPoet/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/XPoet/vue-webpack-todoapp',
      description: ':notebook_with_decorative_cover:vue + webpack打造todo应用',
      fork: false,
      url: 'https://api.github.com/repos/XPoet/vue-webpack-todoapp',
      forks_url: 'https://api.github.com/repos/XPoet/vue-webpack-todoapp/forks',
      keys_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/XPoet/vue-webpack-todoapp/teams',
      hooks_url: 'https://api.github.com/repos/XPoet/vue-webpack-todoapp/hooks',
      issue_events_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/events',
      assignees_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/branches{/branch}',
      tags_url: 'https://api.github.com/repos/XPoet/vue-webpack-todoapp/tags',
      blobs_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/languages',
      stargazers_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/stargazers',
      contributors_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/contributors',
      subscribers_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/subscribers',
      subscription_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/subscription',
      commits_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/merges',
      archive_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/downloads',
      issues_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/labels{/name}',
      releases_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/XPoet/vue-webpack-todoapp/deployments',
      created_at: '2018-03-12T06:43:38Z',
      updated_at: '2022-10-05T09:42:19Z',
      pushed_at: '2018-05-31T01:18:27Z',
      git_url: 'git://github.com/XPoet/vue-webpack-todoapp.git',
      ssh_url: 'git@github.com:XPoet/vue-webpack-todoapp.git',
      clone_url: 'https://github.com/XPoet/vue-webpack-todoapp.git',
      svn_url: 'https://github.com/XPoet/vue-webpack-todoapp',
      homepage: 'https://xpoet.cn/vue-webpack-dist-todoapp/',
      size: 466,
      stargazers_count: 188,
      watchers_count: 188,
      language: 'Vue',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 48,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 48,
      open_issues: 1,
      watchers: 188,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 140258781,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDAyNTg3ODE=',
      name: 'styleurl-extension',
      full_name: 'Jarred-Sumner/styleurl-extension',
      private: false,
      owner: {
        login: 'Jarred-Sumner',
        id: 709451,
        node_id: 'MDQ6VXNlcjcwOTQ1MQ==',
        avatar_url: 'https://avatars.githubusercontent.com/u/709451?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Jarred-Sumner',
        html_url: 'https://github.com/Jarred-Sumner',
        followers_url: 'https://api.github.com/users/Jarred-Sumner/followers',
        following_url:
          'https://api.github.com/users/Jarred-Sumner/following{/other_user}',
        gists_url: 'https://api.github.com/users/Jarred-Sumner/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Jarred-Sumner/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Jarred-Sumner/subscriptions',
        organizations_url: 'https://api.github.com/users/Jarred-Sumner/orgs',
        repos_url: 'https://api.github.com/users/Jarred-Sumner/repos',
        events_url:
          'https://api.github.com/users/Jarred-Sumner/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Jarred-Sumner/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Jarred-Sumner/styleurl-extension',
      description: 'Share & export CSS tweaks from Chrome instantly.',
      fork: false,
      url: 'https://api.github.com/repos/Jarred-Sumner/styleurl-extension',
      forks_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/forks',
      keys_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/teams',
      hooks_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/hooks',
      issue_events_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/events',
      assignees_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/tags',
      blobs_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/languages',
      stargazers_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/stargazers',
      contributors_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/contributors',
      subscribers_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/subscribers',
      subscription_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/subscription',
      commits_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/merges',
      archive_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/downloads',
      issues_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Jarred-Sumner/styleurl-extension/deployments',
      created_at: '2018-07-09T08:57:14Z',
      updated_at: '2022-11-30T18:19:00Z',
      pushed_at: '2018-08-05T04:36:35Z',
      git_url: 'git://github.com/Jarred-Sumner/styleurl-extension.git',
      ssh_url: 'git@github.com:Jarred-Sumner/styleurl-extension.git',
      clone_url: 'https://github.com/Jarred-Sumner/styleurl-extension.git',
      svn_url: 'https://github.com/Jarred-Sumner/styleurl-extension',
      homepage: 'https://www.styleurl.app',
      size: 5283,
      stargazers_count: 188,
      watchers_count: 188,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 8,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 5,
      license: {
        key: 'agpl-3.0',
        name: 'GNU Affero General Public License v3.0',
        spdx_id: 'AGPL-3.0',
        url: 'https://api.github.com/licenses/agpl-3.0',
        node_id: 'MDc6TGljZW5zZTE=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'chrome',
        'chrome-extension',
        'css',
        'extension',
        'javascript',
        'stylesheet',
        'styleurls',
      ],
      visibility: 'public',
      forks: 8,
      open_issues: 5,
      watchers: 188,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 125674128,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjU2NzQxMjg=',
      name: 'requests-xml',
      full_name: 'erinxocon/requests-xml',
      private: false,
      owner: {
        login: 'erinxocon',
        id: 208567,
        node_id: 'MDQ6VXNlcjIwODU2Nw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/208567?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/erinxocon',
        html_url: 'https://github.com/erinxocon',
        followers_url: 'https://api.github.com/users/erinxocon/followers',
        following_url:
          'https://api.github.com/users/erinxocon/following{/other_user}',
        gists_url: 'https://api.github.com/users/erinxocon/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/erinxocon/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/erinxocon/subscriptions',
        organizations_url: 'https://api.github.com/users/erinxocon/orgs',
        repos_url: 'https://api.github.com/users/erinxocon/repos',
        events_url: 'https://api.github.com/users/erinxocon/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/erinxocon/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/erinxocon/requests-xml',
      description: 'Requests-XML: XML Parsing for Humans',
      fork: false,
      url: 'https://api.github.com/repos/erinxocon/requests-xml',
      forks_url: 'https://api.github.com/repos/erinxocon/requests-xml/forks',
      keys_url:
        'https://api.github.com/repos/erinxocon/requests-xml/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/erinxocon/requests-xml/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/erinxocon/requests-xml/teams',
      hooks_url: 'https://api.github.com/repos/erinxocon/requests-xml/hooks',
      issue_events_url:
        'https://api.github.com/repos/erinxocon/requests-xml/issues/events{/number}',
      events_url: 'https://api.github.com/repos/erinxocon/requests-xml/events',
      assignees_url:
        'https://api.github.com/repos/erinxocon/requests-xml/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/erinxocon/requests-xml/branches{/branch}',
      tags_url: 'https://api.github.com/repos/erinxocon/requests-xml/tags',
      blobs_url:
        'https://api.github.com/repos/erinxocon/requests-xml/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/erinxocon/requests-xml/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/erinxocon/requests-xml/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/erinxocon/requests-xml/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/erinxocon/requests-xml/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/erinxocon/requests-xml/languages',
      stargazers_url:
        'https://api.github.com/repos/erinxocon/requests-xml/stargazers',
      contributors_url:
        'https://api.github.com/repos/erinxocon/requests-xml/contributors',
      subscribers_url:
        'https://api.github.com/repos/erinxocon/requests-xml/subscribers',
      subscription_url:
        'https://api.github.com/repos/erinxocon/requests-xml/subscription',
      commits_url:
        'https://api.github.com/repos/erinxocon/requests-xml/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/erinxocon/requests-xml/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/erinxocon/requests-xml/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/erinxocon/requests-xml/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/erinxocon/requests-xml/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/erinxocon/requests-xml/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/erinxocon/requests-xml/merges',
      archive_url:
        'https://api.github.com/repos/erinxocon/requests-xml/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/erinxocon/requests-xml/downloads',
      issues_url:
        'https://api.github.com/repos/erinxocon/requests-xml/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/erinxocon/requests-xml/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/erinxocon/requests-xml/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/erinxocon/requests-xml/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/erinxocon/requests-xml/labels{/name}',
      releases_url:
        'https://api.github.com/repos/erinxocon/requests-xml/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/erinxocon/requests-xml/deployments',
      created_at: '2018-03-17T22:31:07Z',
      updated_at: '2023-02-14T09:27:59Z',
      pushed_at: '2021-04-20T17:02:03Z',
      git_url: 'git://github.com/erinxocon/requests-xml.git',
      ssh_url: 'git@github.com:erinxocon/requests-xml.git',
      clone_url: 'https://github.com/erinxocon/requests-xml.git',
      svn_url: 'https://github.com/erinxocon/requests-xml',
      homepage: 'http://xml.python-requests.org',
      size: 2999,
      stargazers_count: 187,
      watchers_count: 187,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 6,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 11,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 6,
      open_issues: 11,
      watchers: 187,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 122949655,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjI5NDk2NTU=',
      name: 'yii2-cms',
      full_name: 'weison-tech/yii2-cms',
      private: false,
      owner: {
        login: 'weison-tech',
        id: 11470769,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjExNDcwNzY5',
        avatar_url: 'https://avatars.githubusercontent.com/u/11470769?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/weison-tech',
        html_url: 'https://github.com/weison-tech',
        followers_url: 'https://api.github.com/users/weison-tech/followers',
        following_url:
          'https://api.github.com/users/weison-tech/following{/other_user}',
        gists_url: 'https://api.github.com/users/weison-tech/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/weison-tech/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/weison-tech/subscriptions',
        organizations_url: 'https://api.github.com/users/weison-tech/orgs',
        repos_url: 'https://api.github.com/users/weison-tech/repos',
        events_url: 'https://api.github.com/users/weison-tech/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/weison-tech/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/weison-tech/yii2-cms',
      description: 'An enterprise application based on yii2 basic template',
      fork: false,
      url: 'https://api.github.com/repos/weison-tech/yii2-cms',
      forks_url: 'https://api.github.com/repos/weison-tech/yii2-cms/forks',
      keys_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/weison-tech/yii2-cms/teams',
      hooks_url: 'https://api.github.com/repos/weison-tech/yii2-cms/hooks',
      issue_events_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/issues/events{/number}',
      events_url: 'https://api.github.com/repos/weison-tech/yii2-cms/events',
      assignees_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/branches{/branch}',
      tags_url: 'https://api.github.com/repos/weison-tech/yii2-cms/tags',
      blobs_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/languages',
      stargazers_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/stargazers',
      contributors_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/contributors',
      subscribers_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/subscribers',
      subscription_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/subscription',
      commits_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/weison-tech/yii2-cms/merges',
      archive_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/downloads',
      issues_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/labels{/name}',
      releases_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/weison-tech/yii2-cms/deployments',
      created_at: '2018-02-26T09:57:19Z',
      updated_at: '2022-03-18T09:00:52Z',
      pushed_at: '2020-03-28T06:36:45Z',
      git_url: 'git://github.com/weison-tech/yii2-cms.git',
      ssh_url: 'git@github.com:weison-tech/yii2-cms.git',
      clone_url: 'https://github.com/weison-tech/yii2-cms.git',
      svn_url: 'https://github.com/weison-tech/yii2-cms',
      homepage: 'https://mym.pub',
      size: 7673,
      stargazers_count: 187,
      watchers_count: 187,
      language: 'PHP',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 21,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'other',
        name: 'Other',
        spdx_id: 'NOASSERTION',
        url: null,
        node_id: 'MDc6TGljZW5zZTA=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'adminlte',
        'cms',
        'enterprise',
        'rbac',
        'yii2',
        'yii2-cms',
        'yii2-enterprise',
      ],
      visibility: 'public',
      forks: 21,
      open_issues: 0,
      watchers: 187,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 301305200,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDEzMDUyMDA=',
      name: 'DRC-mobility-contracts',
      full_name: 'DRC-asia/DRC-mobility-contracts',
      private: false,
      owner: {
        login: 'DRC-asia',
        id: 72002301,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjcyMDAyMzAx',
        avatar_url: 'https://avatars.githubusercontent.com/u/72002301?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/DRC-asia',
        html_url: 'https://github.com/DRC-asia',
        followers_url: 'https://api.github.com/users/DRC-asia/followers',
        following_url:
          'https://api.github.com/users/DRC-asia/following{/other_user}',
        gists_url: 'https://api.github.com/users/DRC-asia/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/DRC-asia/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/DRC-asia/subscriptions',
        organizations_url: 'https://api.github.com/users/DRC-asia/orgs',
        repos_url: 'https://api.github.com/users/DRC-asia/repos',
        events_url: 'https://api.github.com/users/DRC-asia/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/DRC-asia/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/DRC-asia/DRC-mobility-contracts',
      description: 'DRC-contracts',
      fork: false,
      url: 'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts',
      forks_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/forks',
      keys_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/teams',
      hooks_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/hooks',
      issue_events_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/events',
      assignees_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/tags',
      blobs_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/languages',
      stargazers_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/stargazers',
      contributors_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/contributors',
      subscribers_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/subscribers',
      subscription_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/subscription',
      commits_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/merges',
      archive_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/downloads',
      issues_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/labels{/name}',
      releases_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/DRC-asia/DRC-mobility-contracts/deployments',
      created_at: '2020-10-05T05:43:32Z',
      updated_at: '2022-05-20T05:06:24Z',
      pushed_at: '2022-02-16T13:30:48Z',
      git_url: 'git://github.com/DRC-asia/DRC-mobility-contracts.git',
      ssh_url: 'git@github.com:DRC-asia/DRC-mobility-contracts.git',
      clone_url: 'https://github.com/DRC-asia/DRC-mobility-contracts.git',
      svn_url: 'https://github.com/DRC-asia/DRC-mobility-contracts',
      homepage: '',
      size: 1093,
      stargazers_count: 187,
      watchers_count: 187,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 0,
      watchers: 187,
      default_branch: 'main',
      score: 1.0,
    },
    {
      id: 114714036,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTQ3MTQwMzY=',
      name: 'popup',
      full_name: 'lingdublog/popup',
      private: false,
      owner: {
        login: 'lingdublog',
        id: 7867811,
        node_id: 'MDQ6VXNlcjc4Njc4MTE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7867811?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/lingdublog',
        html_url: 'https://github.com/lingdublog',
        followers_url: 'https://api.github.com/users/lingdublog/followers',
        following_url:
          'https://api.github.com/users/lingdublog/following{/other_user}',
        gists_url: 'https://api.github.com/users/lingdublog/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/lingdublog/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/lingdublog/subscriptions',
        organizations_url: 'https://api.github.com/users/lingdublog/orgs',
        repos_url: 'https://api.github.com/users/lingdublog/repos',
        events_url: 'https://api.github.com/users/lingdublog/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/lingdublog/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/lingdublog/popup',
      description:
        '最小巧的移动端弹窗组件，toast、alert、confirm，使用原生js，不依赖任何类库，不需要引入任何css文件，只有一个js文件',
      fork: false,
      url: 'https://api.github.com/repos/lingdublog/popup',
      forks_url: 'https://api.github.com/repos/lingdublog/popup/forks',
      keys_url: 'https://api.github.com/repos/lingdublog/popup/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/lingdublog/popup/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/lingdublog/popup/teams',
      hooks_url: 'https://api.github.com/repos/lingdublog/popup/hooks',
      issue_events_url:
        'https://api.github.com/repos/lingdublog/popup/issues/events{/number}',
      events_url: 'https://api.github.com/repos/lingdublog/popup/events',
      assignees_url:
        'https://api.github.com/repos/lingdublog/popup/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/lingdublog/popup/branches{/branch}',
      tags_url: 'https://api.github.com/repos/lingdublog/popup/tags',
      blobs_url:
        'https://api.github.com/repos/lingdublog/popup/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/lingdublog/popup/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/lingdublog/popup/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/lingdublog/popup/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/lingdublog/popup/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/lingdublog/popup/languages',
      stargazers_url:
        'https://api.github.com/repos/lingdublog/popup/stargazers',
      contributors_url:
        'https://api.github.com/repos/lingdublog/popup/contributors',
      subscribers_url:
        'https://api.github.com/repos/lingdublog/popup/subscribers',
      subscription_url:
        'https://api.github.com/repos/lingdublog/popup/subscription',
      commits_url:
        'https://api.github.com/repos/lingdublog/popup/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/lingdublog/popup/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/lingdublog/popup/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/lingdublog/popup/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/lingdublog/popup/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/lingdublog/popup/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/lingdublog/popup/merges',
      archive_url:
        'https://api.github.com/repos/lingdublog/popup/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/lingdublog/popup/downloads',
      issues_url:
        'https://api.github.com/repos/lingdublog/popup/issues{/number}',
      pulls_url: 'https://api.github.com/repos/lingdublog/popup/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/lingdublog/popup/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/lingdublog/popup/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/lingdublog/popup/labels{/name}',
      releases_url:
        'https://api.github.com/repos/lingdublog/popup/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/lingdublog/popup/deployments',
      created_at: '2017-12-19T03:20:26Z',
      updated_at: '2022-09-17T13:02:12Z',
      pushed_at: '2017-12-21T04:21:27Z',
      git_url: 'git://github.com/lingdublog/popup.git',
      ssh_url: 'git@github.com:lingdublog/popup.git',
      clone_url: 'https://github.com/lingdublog/popup.git',
      svn_url: 'https://github.com/lingdublog/popup',
      homepage: '',
      size: 15,
      stargazers_count: 186,
      watchers_count: 186,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 24,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 24,
      open_issues: 0,
      watchers: 186,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 110078521,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTAwNzg1MjE=',
      name: 'ARDoor',
      full_name: 'Minecodecraft/ARDoor',
      private: false,
      owner: {
        login: 'Minecodecraft',
        id: 25859636,
        node_id: 'MDQ6VXNlcjI1ODU5NjM2',
        avatar_url: 'https://avatars.githubusercontent.com/u/25859636?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Minecodecraft',
        html_url: 'https://github.com/Minecodecraft',
        followers_url: 'https://api.github.com/users/Minecodecraft/followers',
        following_url:
          'https://api.github.com/users/Minecodecraft/following{/other_user}',
        gists_url: 'https://api.github.com/users/Minecodecraft/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Minecodecraft/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Minecodecraft/subscriptions',
        organizations_url: 'https://api.github.com/users/Minecodecraft/orgs',
        repos_url: 'https://api.github.com/users/Minecodecraft/repos',
        events_url:
          'https://api.github.com/users/Minecodecraft/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Minecodecraft/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Minecodecraft/ARDoor',
      description:
        'Use AR technology to create a free and accessible door. Using ARKit, Swift 4.0',
      fork: false,
      url: 'https://api.github.com/repos/Minecodecraft/ARDoor',
      forks_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/forks',
      keys_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/teams',
      hooks_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/hooks',
      issue_events_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/events',
      assignees_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/tags',
      blobs_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/languages',
      stargazers_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/stargazers',
      contributors_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/contributors',
      subscribers_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/subscribers',
      subscription_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/subscription',
      commits_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Minecodecraft/ARDoor/merges',
      archive_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/downloads',
      issues_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Minecodecraft/ARDoor/deployments',
      created_at: '2017-11-09T06:50:44Z',
      updated_at: '2021-11-24T18:10:24Z',
      pushed_at: '2017-11-10T16:18:43Z',
      git_url: 'git://github.com/Minecodecraft/ARDoor.git',
      ssh_url: 'git@github.com:Minecodecraft/ARDoor.git',
      clone_url: 'https://github.com/Minecodecraft/ARDoor.git',
      svn_url: 'https://github.com/Minecodecraft/ARDoor',
      homepage: null,
      size: 9167,
      stargazers_count: 185,
      watchers_count: 185,
      language: 'Swift',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 7,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 7,
      open_issues: 0,
      watchers: 185,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 142132066,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDIxMzIwNjY=',
      name: 'slide-view',
      full_name: 'wechat-miniprogram/slide-view',
      private: false,
      owner: {
        login: 'wechat-miniprogram',
        id: 40269642,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjQwMjY5NjQy',
        avatar_url: 'https://avatars.githubusercontent.com/u/40269642?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/wechat-miniprogram',
        html_url: 'https://github.com/wechat-miniprogram',
        followers_url:
          'https://api.github.com/users/wechat-miniprogram/followers',
        following_url:
          'https://api.github.com/users/wechat-miniprogram/following{/other_user}',
        gists_url:
          'https://api.github.com/users/wechat-miniprogram/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/wechat-miniprogram/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/wechat-miniprogram/subscriptions',
        organizations_url:
          'https://api.github.com/users/wechat-miniprogram/orgs',
        repos_url: 'https://api.github.com/users/wechat-miniprogram/repos',
        events_url:
          'https://api.github.com/users/wechat-miniprogram/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/wechat-miniprogram/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/wechat-miniprogram/slide-view',
      description: 'weapp custom component -- slide-view',
      fork: false,
      url: 'https://api.github.com/repos/wechat-miniprogram/slide-view',
      forks_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/forks',
      keys_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/teams',
      hooks_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/hooks',
      issue_events_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/events',
      assignees_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/tags',
      blobs_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/languages',
      stargazers_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/stargazers',
      contributors_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/contributors',
      subscribers_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/subscribers',
      subscription_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/subscription',
      commits_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/merges',
      archive_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/downloads',
      issues_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/labels{/name}',
      releases_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/wechat-miniprogram/slide-view/deployments',
      created_at: '2018-07-24T08:55:39Z',
      updated_at: '2023-01-28T17:27:59Z',
      pushed_at: '2019-08-05T07:51:32Z',
      git_url: 'git://github.com/wechat-miniprogram/slide-view.git',
      ssh_url: 'git@github.com:wechat-miniprogram/slide-view.git',
      clone_url: 'https://github.com/wechat-miniprogram/slide-view.git',
      svn_url: 'https://github.com/wechat-miniprogram/slide-view',
      homepage: null,
      size: 183,
      stargazers_count: 185,
      watchers_count: 185,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 36,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 5,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 36,
      open_issues: 5,
      watchers: 185,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 145385487,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDUzODU0ODc=',
      name: 'android-mvp-dagger2-flytranslate',
      full_name: 'mxdldev/android-mvp-dagger2-flytranslate',
      private: false,
      owner: {
        login: 'mxdldev',
        id: 7042195,
        node_id: 'MDQ6VXNlcjcwNDIxOTU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7042195?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mxdldev',
        html_url: 'https://github.com/mxdldev',
        followers_url: 'https://api.github.com/users/mxdldev/followers',
        following_url:
          'https://api.github.com/users/mxdldev/following{/other_user}',
        gists_url: 'https://api.github.com/users/mxdldev/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/mxdldev/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mxdldev/subscriptions',
        organizations_url: 'https://api.github.com/users/mxdldev/orgs',
        repos_url: 'https://api.github.com/users/mxdldev/repos',
        events_url: 'https://api.github.com/users/mxdldev/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/mxdldev/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/mxdldev/android-mvp-dagger2-flytranslate',
      description:
        'MVP+RxJava+Retrofit+Dagger2, FlyTranslate是基于MVP开发的Android应用程序的通用架构集成了许多开源项目如Dagger2，RxJava，Retrofit ，使您的开发更快捷，更轻松。',
      fork: false,
      // url: 'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate',
      forks_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/forks',
      keys_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/teams',
      hooks_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/hooks',
      issue_events_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/events',
      assignees_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/tags',
      blobs_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/languages',
      stargazers_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/stargazers',
      contributors_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/contributors',
      subscribers_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/subscribers',
      subscription_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/subscription',
      commits_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/merges',
      archive_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/downloads',
      issues_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/labels{/name}',
      releases_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/mxdldev/android-mvp-dagger2-flytranslate/deployments',
      created_at: '2018-08-20T07:59:25Z',
      updated_at: '2022-03-14T14:41:56Z',
      pushed_at: '2019-06-24T09:26:07Z',
      git_url: 'git://github.com/mxdldev/android-mvp-dagger2-flytranslate.git',
      ssh_url: 'git@github.com:mxdldev/android-mvp-dagger2-flytranslate.git',
      clone_url:
        'https://github.com/mxdldev/android-mvp-dagger2-flytranslate.git',
      svn_url: 'https://github.com/mxdldev/android-mvp-dagger2-flytranslate',
      homepage: '',
      size: 214,
      stargazers_count: 183,
      watchers_count: 183,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 50,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['mvp', 'mvp-android', 'rxjava2-dagger2-retrofit2'],
      visibility: 'public',
      forks: 50,
      open_issues: 0,
      watchers: 183,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 114334591,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTQzMzQ1OTE=',
      name: 'DeepLearn-Tensorflow',
      full_name: 'UCodeUStory/DeepLearn-Tensorflow',
      private: false,
      owner: {
        login: 'UCodeUStory',
        id: 17451281,
        node_id: 'MDQ6VXNlcjE3NDUxMjgx',
        avatar_url: 'https://avatars.githubusercontent.com/u/17451281?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/UCodeUStory',
        html_url: 'https://github.com/UCodeUStory',
        followers_url: 'https://api.github.com/users/UCodeUStory/followers',
        following_url:
          'https://api.github.com/users/UCodeUStory/following{/other_user}',
        gists_url: 'https://api.github.com/users/UCodeUStory/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/UCodeUStory/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/UCodeUStory/subscriptions',
        organizations_url: 'https://api.github.com/users/UCodeUStory/orgs',
        repos_url: 'https://api.github.com/users/UCodeUStory/repos',
        events_url: 'https://api.github.com/users/UCodeUStory/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/UCodeUStory/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/UCodeUStory/DeepLearn-Tensorflow',
      description:
        '✨✨开始迈向人工智能、机器学习、深度学习，学习主流的深度学习框架Tensorflow之旅',
      fork: false,
      url: 'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow',
      forks_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/forks',
      keys_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/teams',
      hooks_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/hooks',
      issue_events_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/events',
      assignees_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/tags',
      blobs_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/languages',
      stargazers_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/stargazers',
      contributors_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/contributors',
      subscribers_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/subscribers',
      subscription_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/subscription',
      commits_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/merges',
      archive_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/downloads',
      issues_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/labels{/name}',
      releases_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/UCodeUStory/DeepLearn-Tensorflow/deployments',
      created_at: '2017-12-15T06:21:13Z',
      updated_at: '2022-10-21T02:51:06Z',
      pushed_at: '2018-02-19T12:45:02Z',
      git_url: 'git://github.com/UCodeUStory/DeepLearn-Tensorflow.git',
      ssh_url: 'git@github.com:UCodeUStory/DeepLearn-Tensorflow.git',
      clone_url: 'https://github.com/UCodeUStory/DeepLearn-Tensorflow.git',
      svn_url: 'https://github.com/UCodeUStory/DeepLearn-Tensorflow',
      homepage: '',
      size: 1784,
      stargazers_count: 183,
      watchers_count: 183,
      language: 'Python',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 64,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 64,
      open_issues: 0,
      watchers: 183,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 295319256,
      node_id: 'MDEwOlJlcG9zaXRvcnkyOTUzMTkyNTY=',
      name: 'rubyspeed',
      full_name: 'agrafix/rubyspeed',
      private: false,
      owner: {
        login: 'agrafix',
        id: 1106569,
        node_id: 'MDQ6VXNlcjExMDY1Njk=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1106569?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/agrafix',
        html_url: 'https://github.com/agrafix',
        followers_url: 'https://api.github.com/users/agrafix/followers',
        following_url:
          'https://api.github.com/users/agrafix/following{/other_user}',
        gists_url: 'https://api.github.com/users/agrafix/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/agrafix/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/agrafix/subscriptions',
        organizations_url: 'https://api.github.com/users/agrafix/orgs',
        repos_url: 'https://api.github.com/users/agrafix/repos',
        events_url: 'https://api.github.com/users/agrafix/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/agrafix/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/agrafix/rubyspeed',
      description: 'Compile ruby functions to C',
      fork: false,
      url: 'https://api.github.com/repos/agrafix/rubyspeed',
      forks_url: 'https://api.github.com/repos/agrafix/rubyspeed/forks',
      keys_url: 'https://api.github.com/repos/agrafix/rubyspeed/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/agrafix/rubyspeed/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/agrafix/rubyspeed/teams',
      hooks_url: 'https://api.github.com/repos/agrafix/rubyspeed/hooks',
      issue_events_url:
        'https://api.github.com/repos/agrafix/rubyspeed/issues/events{/number}',
      events_url: 'https://api.github.com/repos/agrafix/rubyspeed/events',
      assignees_url:
        'https://api.github.com/repos/agrafix/rubyspeed/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/agrafix/rubyspeed/branches{/branch}',
      tags_url: 'https://api.github.com/repos/agrafix/rubyspeed/tags',
      blobs_url:
        'https://api.github.com/repos/agrafix/rubyspeed/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/agrafix/rubyspeed/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/agrafix/rubyspeed/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/agrafix/rubyspeed/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/agrafix/rubyspeed/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/agrafix/rubyspeed/languages',
      stargazers_url:
        'https://api.github.com/repos/agrafix/rubyspeed/stargazers',
      contributors_url:
        'https://api.github.com/repos/agrafix/rubyspeed/contributors',
      subscribers_url:
        'https://api.github.com/repos/agrafix/rubyspeed/subscribers',
      subscription_url:
        'https://api.github.com/repos/agrafix/rubyspeed/subscription',
      commits_url:
        'https://api.github.com/repos/agrafix/rubyspeed/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/agrafix/rubyspeed/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/agrafix/rubyspeed/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/agrafix/rubyspeed/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/agrafix/rubyspeed/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/agrafix/rubyspeed/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/agrafix/rubyspeed/merges',
      archive_url:
        'https://api.github.com/repos/agrafix/rubyspeed/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/agrafix/rubyspeed/downloads',
      issues_url:
        'https://api.github.com/repos/agrafix/rubyspeed/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/agrafix/rubyspeed/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/agrafix/rubyspeed/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/agrafix/rubyspeed/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/agrafix/rubyspeed/labels{/name}',
      releases_url:
        'https://api.github.com/repos/agrafix/rubyspeed/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/agrafix/rubyspeed/deployments',
      created_at: '2020-09-14T06:04:24Z',
      updated_at: '2023-01-21T01:18:51Z',
      pushed_at: '2020-09-21T01:24:05Z',
      git_url: 'git://github.com/agrafix/rubyspeed.git',
      ssh_url: 'git@github.com:agrafix/rubyspeed.git',
      clone_url: 'https://github.com/agrafix/rubyspeed.git',
      svn_url: 'https://github.com/agrafix/rubyspeed',
      homepage: '',
      size: 59,
      stargazers_count: 182,
      watchers_count: 182,
      language: 'Ruby',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 2,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['c', 'compiler', 'performance', 'ruby'],
      visibility: 'public',
      forks: 2,
      open_issues: 0,
      watchers: 182,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 109952811,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMDk5NTI4MTE=',
      name: 'oksharedprefs',
      full_name: 'sevenshal/oksharedprefs',
      private: false,
      owner: {
        login: 'sevenshal',
        id: 5206606,
        node_id: 'MDQ6VXNlcjUyMDY2MDY=',
        avatar_url: 'https://avatars.githubusercontent.com/u/5206606?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/sevenshal',
        html_url: 'https://github.com/sevenshal',
        followers_url: 'https://api.github.com/users/sevenshal/followers',
        following_url:
          'https://api.github.com/users/sevenshal/following{/other_user}',
        gists_url: 'https://api.github.com/users/sevenshal/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/sevenshal/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/sevenshal/subscriptions',
        organizations_url: 'https://api.github.com/users/sevenshal/orgs',
        repos_url: 'https://api.github.com/users/sevenshal/repos',
        events_url: 'https://api.github.com/users/sevenshal/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/sevenshal/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/sevenshal/oksharedprefs',
      description:
        '通过注解生成SharedPreferences包装类，解决跨进程数据访问不同步的问题。',
      fork: false,
      url: 'https://api.github.com/repos/sevenshal/oksharedprefs',
      forks_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/forks',
      keys_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/teams',
      hooks_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/hooks',
      issue_events_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/events',
      assignees_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/tags',
      blobs_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/languages',
      stargazers_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/stargazers',
      contributors_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/contributors',
      subscribers_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/subscribers',
      subscription_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/subscription',
      commits_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/sevenshal/oksharedprefs/merges',
      archive_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/downloads',
      issues_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/labels{/name}',
      releases_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/sevenshal/oksharedprefs/deployments',
      created_at: '2017-11-08T09:09:50Z',
      updated_at: '2022-05-18T10:05:27Z',
      pushed_at: '2018-01-28T05:31:05Z',
      git_url: 'git://github.com/sevenshal/oksharedprefs.git',
      ssh_url: 'git@github.com:sevenshal/oksharedprefs.git',
      clone_url: 'https://github.com/sevenshal/oksharedprefs.git',
      svn_url: 'https://github.com/sevenshal/oksharedprefs',
      homepage: null,
      size: 170,
      stargazers_count: 182,
      watchers_count: 182,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 4,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['android', 'annotations', 'multiprocess', 'sharedpreferences'],
      visibility: 'public',
      forks: 4,
      open_issues: 0,
      watchers: 182,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 146726722,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDY3MjY3MjI=',
      name: 'MZSluggard-code',
      full_name: 'JianLin-Shen/MZSluggard-code',
      private: false,
      owner: {
        login: 'JianLin-Shen',
        id: 7393012,
        node_id: 'MDQ6VXNlcjczOTMwMTI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7393012?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/JianLin-Shen',
        html_url: 'https://github.com/JianLin-Shen',
        followers_url: 'https://api.github.com/users/JianLin-Shen/followers',
        following_url:
          'https://api.github.com/users/JianLin-Shen/following{/other_user}',
        gists_url: 'https://api.github.com/users/JianLin-Shen/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/JianLin-Shen/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/JianLin-Shen/subscriptions',
        organizations_url: 'https://api.github.com/users/JianLin-Shen/orgs',
        repos_url: 'https://api.github.com/users/JianLin-Shen/repos',
        events_url:
          'https://api.github.com/users/JianLin-Shen/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/JianLin-Shen/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/JianLin-Shen/MZSluggard-code',
      description: 'Android插件，辅助生成代码MZSluggard-code',
      fork: false,
      url: 'https://api.github.com/repos/JianLin-Shen/MZSluggard-code',
      forks_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/forks',
      keys_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/teams',
      hooks_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/hooks',
      issue_events_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/events',
      assignees_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/tags',
      blobs_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/languages',
      stargazers_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/stargazers',
      contributors_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/contributors',
      subscribers_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/subscribers',
      subscription_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/subscription',
      commits_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/merges',
      archive_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/downloads',
      issues_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/labels{/name}',
      releases_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/JianLin-Shen/MZSluggard-code/deployments',
      created_at: '2018-08-30T09:25:10Z',
      updated_at: '2022-03-18T09:00:55Z',
      pushed_at: '2019-04-23T08:40:26Z',
      git_url: 'git://github.com/JianLin-Shen/MZSluggard-code.git',
      ssh_url: 'git@github.com:JianLin-Shen/MZSluggard-code.git',
      clone_url: 'https://github.com/JianLin-Shen/MZSluggard-code.git',
      svn_url: 'https://github.com/JianLin-Shen/MZSluggard-code',
      homepage: '',
      size: 3262,
      stargazers_count: 182,
      watchers_count: 182,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 5,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 5,
      open_issues: 0,
      watchers: 182,
      default_branch: 'master',
      score: 1.0,
    },
    {
      id: 126977614,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjY5Nzc2MTQ=',
      name: 'redux-callbag',
      full_name: 'janryWang/redux-callbag',
      private: false,
      owner: {
        login: 'janryWang',
        id: 4060976,
        node_id: 'MDQ6VXNlcjQwNjA5NzY=',
        avatar_url: 'https://avatars.githubusercontent.com/u/4060976?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/janryWang',
        html_url: 'https://github.com/janryWang',
        followers_url: 'https://api.github.com/users/janryWang/followers',
        following_url:
          'https://api.github.com/users/janryWang/following{/other_user}',
        gists_url: 'https://api.github.com/users/janryWang/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/janryWang/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/janryWang/subscriptions',
        organizations_url: 'https://api.github.com/users/janryWang/orgs',
        repos_url: 'https://api.github.com/users/janryWang/repos',
        events_url: 'https://api.github.com/users/janryWang/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/janryWang/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/janryWang/redux-callbag',
      description:
        '🕺🕺Redux middleware for action side effects with callbag 👉< 1KB',
      fork: false,
      url: 'https://api.github.com/repos/janryWang/redux-callbag',
      forks_url: 'https://api.github.com/repos/janryWang/redux-callbag/forks',
      keys_url:
        'https://api.github.com/repos/janryWang/redux-callbag/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/janryWang/redux-callbag/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/janryWang/redux-callbag/teams',
      hooks_url: 'https://api.github.com/repos/janryWang/redux-callbag/hooks',
      issue_events_url:
        'https://api.github.com/repos/janryWang/redux-callbag/issues/events{/number}',
      events_url: 'https://api.github.com/repos/janryWang/redux-callbag/events',
      assignees_url:
        'https://api.github.com/repos/janryWang/redux-callbag/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/janryWang/redux-callbag/branches{/branch}',
      tags_url: 'https://api.github.com/repos/janryWang/redux-callbag/tags',
      blobs_url:
        'https://api.github.com/repos/janryWang/redux-callbag/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/janryWang/redux-callbag/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/janryWang/redux-callbag/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/janryWang/redux-callbag/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/janryWang/redux-callbag/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/janryWang/redux-callbag/languages',
      stargazers_url:
        'https://api.github.com/repos/janryWang/redux-callbag/stargazers',
      contributors_url:
        'https://api.github.com/repos/janryWang/redux-callbag/contributors',
      subscribers_url:
        'https://api.github.com/repos/janryWang/redux-callbag/subscribers',
      subscription_url:
        'https://api.github.com/repos/janryWang/redux-callbag/subscription',
      commits_url:
        'https://api.github.com/repos/janryWang/redux-callbag/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/janryWang/redux-callbag/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/janryWang/redux-callbag/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/janryWang/redux-callbag/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/janryWang/redux-callbag/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/janryWang/redux-callbag/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/janryWang/redux-callbag/merges',
      archive_url:
        'https://api.github.com/repos/janryWang/redux-callbag/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/janryWang/redux-callbag/downloads',
      issues_url:
        'https://api.github.com/repos/janryWang/redux-callbag/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/janryWang/redux-callbag/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/janryWang/redux-callbag/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/janryWang/redux-callbag/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/janryWang/redux-callbag/labels{/name}',
      releases_url:
        'https://api.github.com/repos/janryWang/redux-callbag/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/janryWang/redux-callbag/deployments',
      created_at: '2018-03-27T11:41:15Z',
      updated_at: '2023-02-25T11:13:27Z',
      pushed_at: '2018-06-29T14:25:44Z',
      git_url: 'git://github.com/janryWang/redux-callbag.git',
      ssh_url: 'git@github.com:janryWang/redux-callbag.git',
      clone_url: 'https://github.com/janryWang/redux-callbag.git',
      svn_url: 'https://github.com/janryWang/redux-callbag',
      homepage: '',
      size: 109,
      stargazers_count: 180,
      watchers_count: 180,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 27,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'callbag',
        'callbags',
        'observable',
        'react',
        'reactive',
        'redux',
        'redux-middleware',
      ],
      visibility: 'public',
      forks: 27,
      open_issues: 1,
      watchers: 180,
      default_branch: 'master',
      score: 1.0,
    },
  ],
}

class MostStarredRepos extends Component {
  // state = {
  //   repos: [],
  // }

  // componentDidMount() {
  //   this.getMostStarredRepos()
  // }

  // getMostStarredRepos = async () => {
  //   const url =
  //     'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2'
  //   const options = {
  //     method: 'GET',
  //   }

  //   const reponse = await fetch(url, options)
  //   console.log(reponse)
  // }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Most Starred Repos</h1>
        {items.map(each => (
          <RepoCard key={each.id} itemDetails={each} />
        ))}
      </div>
    )
  }
}

export default MostStarredRepos
