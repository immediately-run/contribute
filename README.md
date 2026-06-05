# contribute

The **contribute dialog** as an [immediately.run](https://immediately.run) app —
the first-party system app bound to the `modal.contribute` chrome region
(UI_AS_APPS_SPEC §5.1).

It shows which files you've changed but not saved (the elevated `editor:read`
channel), lets you write a message and choose **pull request** or **direct
commit**, then streams the save through the host's contribution orchestrator via
the SDK's `contribute()`.

**The OAuth token never reaches this app.** The host holds it and performs every
privileged step (the GitHub API, the fork, the PR); this app only renders the
streamed progress. Direct commit requires the first-party-only `contribute:direct`
capability — a fork that holds only `contribute:any` is limited to pull requests
(threat T11).

## Capabilities

`theme:read`, `formFactor:read`, `route:read`, `auth:status`, `mounts:read`,
`editor:read`, `contribute:any`, `contribute:direct` — declared in the host's
build-default registry (`immediately-run-site-main/src/registry/defaults.ts`).

## Develop

```sh
npm install
npm run dev      # standalone (no host chrome / no real save)
npm run build
```

Pop the hood: fork it, rebind the `modal.contribute` region to your fork, and the
save dialog becomes yours.
