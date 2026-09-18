&#x20;WORKFLOW



1\. What the rejected push told you, and why - The remote had commits your local branch didn't have, so the push wasn't a fast-forward. Git refuses rather than silently discarding the other developer's commit. It happened because both clones branched from the same commit and edited the same function without syncing first.

! \[rejected]        feature/loyalty-points -> feature/loyalty-points (fetch first)

error: failed to push some refs to 'https://github.com/joshuadaveabella/git-team-sync-abella-joshua.git'

hint: Updates were rejected because the remote contains work that you do

hint: not have locally. This is usually caused by another repository pushing

hint: to the same ref. You may want to first integrate the remote changes

hint: (e.g., 'git pull ...') before pushing again.

hint: See the 'Note about fast-forwards' in 'git push --help' for details.



2\. Merge vs. rebase difference - The merge created a new merge commit with two parents, preserving both lines of history as they actually happened — the history shows a fork and a join. The rebase rewrote your local commit so it sits on top of the remote work, producing a straight line with no merge commit; your commit got a new hash because it's technically a new commit.



3\. The habit that avoids both - git fetch (or git pull) before starting work and again before pushing. Both rejections came from working against a stale view of the remote.



4\. Which to default to on a shared branch - Merge. Rebase rewrites commit hashes, which is fine for commits that only exist locally (Task 4) but dangerous on a branch teammates have already pulled — their history and yours diverge and everyone ends up in a mess. The usual rule: rebase your own unpushed work, merge when the commits are already shared.

