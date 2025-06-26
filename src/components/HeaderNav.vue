<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Mon App Logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Centered Navigation Links -->
        <div class="nav-links-container d-flex justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/trending' }"
                to="/trending"
                >Trending</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/strategies' }"
                to="/strategies"
                >Strategies</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/docs' }"
                to="/docs"
                >Docs</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Connect Button -->
        <div class="ms-auto">
          <button class="btn btn-custom" @click="handleConnect">
            {{ walletAddress ? shortenAddress(walletAddress) : 'Connect' }}
          </button>
        </div>
      </div>
    </div>
    <!-- No Wallet Modal -->
    <Teleport to="body">
      <div
        v-if="showNoWalletModal"
        class="modal fade show"
        id="no-wallet-modal"
        tabindex="-1"
        aria-labelledby="noWalletModalLabel"
        aria-hidden="true"
        style="display: block; background: rgba(0, 0, 0, 0.5);"
        @click.self="closeNoWalletModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="noWalletModalLabel">No Web3 Wallet Detected</h5>
              <button
                type="button"
                class="btn-close"
                @click="closeNoWalletModal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                To connect to this application, you need a Web3 wallet like MetaMask installed in your
                browser.
              </p>
              <p>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  class="metamask-link"
                  >Download MetaMask</a
                >
                to get started.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-custom" @click="closeNoWalletModal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    <!-- Disconnect Confirmation Modal -->
    <Teleport to="body">
      <div
        v-if="showDisconnectModal"
        class="modal fade show"
        id="disconnect-modal"
        tabindex="-1"
        aria-labelledby="disconnectModalLabel"
        aria-hidden="true"
        style="display: block; background: rgba(0, 0, 0, 0.5);"
        @click.self="closeDisconnectModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="disconnectModalLabel">Disconnect Wallet</h5>
              <button
                type="button"
                class="btn-close"
                @click="closeDisconnectModal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to disconnect your wallet?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-custom" @click="closeDisconnectModal">
                Cancel
              </button>
              <button type="button" class="btn btn-custom" @click="disconnectWallet">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      walletAddress: null,
      showNoWalletModal: false,
      showDisconnectModal: false,
    };
  },
  methods: {
    async handleConnect() {
      if (!window.ethereum) {
        this.showNoWalletModal = true;
        return;
      }

      if (this.walletAddress) {
        // Check if the connected address matches MetaMask's selected address
        const selectedAddress = window.ethereum.selectedAddress;
        if (
          selectedAddress &&
          selectedAddress.toLowerCase() !== this.walletAddress.toLowerCase()
        ) {
          // Address mismatch, prompt reconnection
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
              this.walletAddress = accounts[0];
            }
          } catch (error) {
            if (error.code === 4001) {
              alert('Connection rejected by user.');
            } else {
              console.error('Error reconnecting to MetaMask:', error);
              alert('An error occurred while reconnecting to MetaMask.');
            }
          }
          return;
        }
        // No mismatch, show disconnect modal
        this.showDisconnectModal = true;
        return;
      }

      // No wallet connected, attempt to connect
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          this.walletAddress = accounts[0];
        }
      } catch (error) {
        if (error.code === 4001) {
          alert('Connection rejected by user.');
        } else {
          console.error('Error connecting to MetaMask:', error);
          alert('An error occurred while connecting to MetaMask.');
        }
      }
    },
    shortenAddress(address) {
      if (!address) return '';
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    },
    handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        this.walletAddress = null;
      } else {
        this.walletAddress = accounts[0];
      }
    },
    handleChainChanged() {
      // Reload page on chain change to ensure app state is consistent
      window.location.reload();
    },
    closeNoWalletModal() {
      this.showNoWalletModal = false;
    },
    closeDisconnectModal() {
      this.showDisconnectModal = false;
    },
    disconnectWallet() {
      this.walletAddress = null;
      this.showDisconnectModal = false;
    },
  },
  mounted() {
    // Check if MetaMask is already connected
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
        if (accounts.length > 0) {
          this.walletAddress = accounts[0];
        }
      });

      // Listen for account and chain changes
      window.ethereum.on('accountsChanged', this.handleAccountsChanged);
      window.ethereum.on('chainChanged', this.handleChainChanged);
    }
  },
  beforeUnmount() {
    // Clean up event listeners
    if (window.ethereum) {
      window.ethereum.removeListener('accountsChanged', this.handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', this.handleChainChanged);
    }
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px var(--shadow-color);
}
.nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
.nav-links-container {
  flex-grow: 0;
  width: auto;
}
.btn-custom {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: var(--text-dark);
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: opacity 0.2s;
  min-width: 100px; /* Ensure button doesn't shrink too much with address */
}
.btn-custom:hover {
  opacity: 0.9;
}
.btn-custom:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(168, 255, 0, 0.25);
}
.logo {
  height: 40px;
  width: auto;
}
.metamask-link {
  color: var(--primary-color);
  text-decoration: underline;
}
.metamask-link:hover {
  text-decoration: none;
}
.modal-content {
  background: var(--background-light);
  color: var(--text-dark);
}
.modal-header {
  border-bottom: 1px solid var(--border-color);
}
.modal-footer {
  border-top: 1px solid var(--border-color);
}
</style>