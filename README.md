# This is foobarflies.

#### Update

Use `ghost-cli` (installed globally via `npm`):

    ghost update

Then commit the new version in `versions` and the modified `current` symlink. You can remove the legacy versions if needed.

#### Deploy

    cd deploy
    ansible-playbook deploy.yml -i /usr/local/etc/ansible/hosts
